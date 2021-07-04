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
            'title'         => ['sometimes'],
            'details'       => ['sometimes'],
            'location'      => ['sometimes'],
            'telephone'     => ['sometimes'],
            'first_name'    => ['sometimes'],
            'last_name'     => ['sometimes'],
            'phone_number'  => ['sometimes'],
            'holder_name'   => ['sometimes'],
            'ccnumber'      => ['sometimes'],
            'cvv'           => ['sometimes'],
            'expire_month'  => ['sometimes'],
            'expire_year'   => ['sometimes'],
            'total'         => ['sometimes']
        ];
    }
}
