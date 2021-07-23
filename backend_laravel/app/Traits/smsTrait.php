<?php


namespace App\Traits;

use Twilio\Rest\Client;

trait smsTrait
{

    public function sendSms($number, $from, $message)
    {
        $sid = 'AC46104bf93dd0070c02d5907062f1072d';
        $token = 'e26470ad8f303134630d696a7958c4a8';
        $client = new Client($sid, $token);

        try {
            $client->messages->create(
                $number,
                [
                    'from' => $from,
                    'body' => $message,
                ]
            );
        } catch (\Exception $exception) {
            dd($exception);
        }

    }

}
