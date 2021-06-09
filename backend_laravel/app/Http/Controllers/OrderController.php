<?php

namespace App\Http\Controllers;

use App\Http\Requests\OrderRequest;
use App\Models\Order;

class OrderController extends Controller
{

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
        $data = $request->validated();

        $order = new Order($data);
        $order->saveOrFail();

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
