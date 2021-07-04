<?php


namespace App\Traits;

use App\Http\Requests\OrderRequest;
use App\Http\Requests\PaymentValidation;
use App\Models\Order;
use SoapClient;

trait PaymentsTrait
{
    public function hmac($key, $data)
    {
        $b = 64;
        if (strlen($key) > $b) {
            $key = pack("H*", md5($key));
        }

        $key    = str_pad($key, $b, chr(0x00));
        $ipad   = str_pad('', $b, chr(0x36));
        $opad   = str_pad('', $b, chr(0x5c));
        $k_ipad = $key ^ $ipad;
        $k_opad = $key ^ $opad;
        return md5($k_opad . pack("H*", md5($k_ipad . $data)));
    }

    public function finishCreditCardPayment(OrderRequest $request){
        $params = [
            'first_name'    => $request->first_name     ?? 'John',
            'last_name'     => $request->last_name      ?? 'Doe',
            'phone_number'  => $request->phone_number   ?? '+38344223223',
            'holder_name'   => $request->holder_name    ?? 'John Doe',
            'ccnumber'      => $request->ccnumber       ?? '4111111111111111',
            'cvv'           => $request->cvv            ?? '123',
            'expire_month'  => $request->expire_month   ?? '12',
            'expire_year'   => $request->expire_year    ?? '2022',
            'total'         => $request->total          ?? 0
        ];

        $host   = "https://api.avangate.com/soap/3.0/";
        $client = new SoapClient($host ."?wsdl", array(
            'location' => $host,
            "stream_context" => stream_context_create(array(
                'ssl' => array(
                    'verify_peer' => false,
                    'verify_peer_name' => false
                )
            ))
        ));

        $merchantCode = '250840047793';
        $key = 'gK0xFryPsa~lt83nh7q(';
        $productCode = "4JZC9SBAQG";
        $productPrice = $params['total'];

        $now    = gmdate('Y-m-d H:i:s');
        $string = strlen($merchantCode) . $merchantCode . strlen($now) . $now;
        $hash   = $this->hmac($key, $string);

        try {
            $sessionID = $client->login($merchantCode, $now, $hash);
        }
        catch (\SoapFault $e) {
            dd($e);
            return false;
        }

        $Order              = new \stdClass();
        $Order->Currency    = "EUR";
        $Order->Language    = "EN";
        $Order->Country     = "XK";
        $Order->LocalTime   = date('Y-m-d H:i:s');
        $Order->Items       = array();

        $Order->Items[0]                = new \stdClass();
        $Order->Items[0]->Code          = $productCode; // Product Code
        $Order->Items[0]->Quantity      = 1;
        $Order->Items[0]->PurchaseType  = 'PRODUCT';
        $Order->Items[0]->Tangible      = false;
        $Order->Items[0]->IsDynamic     = true;
        $Order->Items[0]->Price         = $productPrice;
        $Order->Items[0]->Name          = 'Food Order' . date("Y-m-d H:i:s"); // Product Name
        $Order->Items[0]->Description   = 'Food Ordered'; // Product Description

        $Order->BillingDetails              = new \stdClass();
        $Order->BillingDetails->Address1    = $params['address'] ?? "test";
        $Order->BillingDetails->City        = $params['city'] ?? "Prishtina"; //not null
        $Order->BillingDetails->State       = $params['state'] ?? "Kosovo";
        $Order->BillingDetails->CountryCode = $params['country_code'] ?? "XK";
        $Order->BillingDetails->Phone       = $params['phone_number'] ?? "test";
        $Order->BillingDetails->Email       = $params['email'] ?? "test@gmail.com";
        $Order->BillingDetails->FirstName   = $params['first_name'] ?? "test";
        $Order->BillingDetails->LastName    = $params['last_name'] ?? "test";
        $Order->BillingDetails->Zip         = $params['zip_code'] ?? "42000"; //not null

        $Order->DeliveryDetails                 = new \stdClass();
        $Order->DeliveryDetails->Address1       = $params['address'] ?? "test";
        $Order->DeliveryDetails->City           = $user->city ?? 'Pristina'; //not null
        $Order->DeliveryDetails->State          = 'Kosovo';
        $Order->DeliveryDetails->CountryCode    = 'XK';
        $Order->DeliveryDetails->Phone          = '+383123345';
        $Order->DeliveryDetails->Email          = 'asdxhafa@gmail.com';
        $Order->DeliveryDetails->FirstName      = $params['first_name'] ?? '';
        $Order->DeliveryDetails->LastName       = $params['last_name'] ?? '';
        $Order->DeliveryDetails->Zip            = $user->postal_code ?? '10000'; //not null

        $Order->PaymentDetails = new \stdClass();
        $Order->PaymentDetails->Type = "TEST";

        $Order->PaymentDetails->Currency = "EUR";

        $Order->PaymentDetails->PaymentMethod = new \stdClass();

        $Order->PaymentDetails->PaymentMethod->CardNumber   = $params['ccnumber']; //4111111111111111 only on testing
        $Order->PaymentDetails->PaymentMethod->CardType     = $this->getCardBrand($params['ccnumber']); // only on testing

        $Order->PaymentDetails->PaymentMethod->ExpirationYear   = $params['expire_year'];
        $Order->PaymentDetails->PaymentMethod->ExpirationMonth  = $params['expire_month'];
        $Order->PaymentDetails->PaymentMethod->CCID             = $params['cvv']; //123 only on testing
        $Order->PaymentDetails->PaymentMethod->HolderName       = $params['holder_name']; //John Doe
        $Order->PaymentDetails->PaymentMethod->RecurringEnabled = true;
        $Order->PaymentDetails->PaymentMethod->HolderNameTime   = 1;
        $Order->PaymentDetails->PaymentMethod->CardNumberTime   = 1;

        try {
            $client->placeOrder($sessionID, $Order);
        }
        catch (\SoapFault $e) {
            dd($e);
            return false;
        }
    }

    public function getCardBrand($pan)
    {
        //visa
        $visa_regex = "/^4[0-9]{0,}$/";

        // MasterCard
        $mastercard_regex = "/^(5[1-5]|222[1-9]|22[3-9]|2[3-6]|27[01]|2720)[0-9]{0,}$/";
        $maestro_regex = "/^(5[06789]|6)[0-9]{0,}$/";

        // American Express
        $amex_regex = "/^3[47][0-9]{0,}$/";

        // Diners Club
        $diners_regex = "/^3(?:0[0-59]{1}|[689])[0-9]{0,}$/";

        //Discover
        $discover_regex = "/^(6011|65|64[4-9]|62212[6-9]|6221[3-9]|622[2-8]|6229[01]|62292[0-5])[0-9]{0,}$/";

        //JCB
        $jcb_regex = "/^(?:2131|1800|35)[0-9]{0,}$/";

        //ordering matter in detection, otherwise can give false results in rare cases
        if (preg_match($jcb_regex, $pan)) {
            return "jcb";
        }

        if (preg_match($amex_regex, $pan)) {
            return "amex";
        }

        if (preg_match($diners_regex, $pan)) {
            return "diners_club";
        }

        if (preg_match($visa_regex, $pan)) {
            return "visa";
        }

        if (preg_match($mastercard_regex, $pan)) {
            return "mastercard";
        }

        if (preg_match($discover_regex, $pan)) {
            return "discover";
        }

        if (preg_match($maestro_regex, $pan)) {
            if ($pan[0] == '5') { //started 5 must be mastercard
                return "mastercard";
            }
            return "maestro";

        }

        return "unknown";
    }

}
