<?php

namespace App\Http\Controllers;

use App\Http\Requests\OrderRequest;
use App\Models\Order;
use App\Traits\PaymentsTrait;

class OrderController extends Controller
{

    use PaymentsTrait;

    public function index()
    {
        return Order::all();
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
}
