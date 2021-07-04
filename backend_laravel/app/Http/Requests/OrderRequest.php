<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class OrderRequest extends FormRequest
{

    public function authorize()
    {
        return true;
    }

    public function rules()
    {
        return [
            'title'         => ['required'],
            'details'       => ['required'],
            'location'      => ['required'],
            'telephone'     => ['required'],
            'first_name'    => ['required'],
            'last_name'     => ['required'],
            'phone_number'  => ['required'],
            'holder_name'   => ['required'],
            'ccnumber'      => ['required'],
            'cvv'           => ['required'],
            'expire_month'  => ['required'],
            'expire_year'   => ['required'],
            'total'         => ['required']
        ];
    }
}
