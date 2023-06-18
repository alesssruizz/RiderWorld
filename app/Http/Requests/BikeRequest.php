<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class BikeRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize(): bool
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, \Illuminate\Contracts\Validation\ValidationRule|array|string>
     */
    public function rules(): array
    {
        return [
            'marca' => 'required|string',
            'modelo' => 'required|string',
            'año' => 'required|digits:4|integer|min:1950',
            'tipo' => 'nullable|string',
            'cilindrada' => 'nullable|numeric',
            'potencia' => 'nullable|decimal:0,2',
            'numMarchas' => 'nullable|numeric|max:9',
            'peso' => 'nullable|numeric',
            'precio' => 'required|decimal:0,2|digits_between:1,6',
            'kilometros' => 'required|numeric|digits_between:1,7',
            'descripcion' => 'required|string',
            'bike_image' => 'image|nullable|mimes:jpeg,png,jpg,gif,svg|max:2048'
        ];
    }
}
