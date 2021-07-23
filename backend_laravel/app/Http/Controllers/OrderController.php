<?php

namespace App\Http\Controllers;

use App\Http\Requests\OrderRequest;
use App\Models\Order;
use App\Traits\PaymentsTrait;
use App\Traits\smsTrait;

class OrderController extends Controller
{

    use PaymentsTrait,smsTrait;

    public function index()
    {
        return Order::where('accepted',false)->get();
    }


    public function show(Order $order)
    {
        return $order;
    }


    public function store(OrderRequest $request)
    {
        $order = Order::create([
            'title' => $request->title,
            'details' => $request->details,
            'location' => $request->location,
            'telephone' => $request->telephone
        ]);

        $this->finishCreditCardPayment($request);

        return $order;
    }

    public function update(OrderRequest $request, Order $order)
    {
        $data = $request->validated();

        $order->update($data);

        return $order;
    }


    public function destroy(Order $order)
    {
        $order->delete();

        return response()->isSuccessful();
    }

    public function prano(Order $order)
    {
        $order->update([
            'accepted' => true
        ]);

        $message = 'Ju njoftojme se porosia e juaj ka arritur me sukses, ju falenderojme qe perzgjodhet foodpicker';

        $this->sendSms($order->telephone,'+19082937912',$message);

        return $order;
    }

}
