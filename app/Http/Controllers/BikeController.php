<?php

namespace App\Http\Controllers;

use App\Models\Bike;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Storage;

class BikeController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        return Inertia::render('Welcome', [
            'laravelVersion' => Application::VERSION,
            'phpVersion' => PHP_VERSION,
            'bikes' => Bike::all()->load('user')
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {

        return Inertia::render('Dashboard/Motos/VenderMoto');
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $data = $request->validate([
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
        ]);

        if($request->hasFile('bike_image')){
            $path = $request->file('bike_image')->store('bikes', 'public');
            $data['bike_image'] = Storage::url($path);
        }else{
            unset($data['bike_image']);
        }
        $bike = auth()->user()->bikes()->create($data);

        return redirect()->route('dashboard')->with('created', "Tú $bike->marca $bike->modelo se ha sido publicado con éxito.");
    }

    /**
     * Display the specified resource.
     */
    public function show(Bike $bike)
    {
        return Inertia::render('Dashboard/Motos/ShowMoto', [
            'bike' => Bike::where('id', $bike->id)->with('user')->first()
        ]);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Bike $bike)
    {
        return Inertia::render('Dashboard/Motos/EditarMoto', [
            'bike' => $bike
        ]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Bike $bike)
    {
        $data = $request->validate([
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
        ]);
        

        if($request->hasFile('bike_image')){
            $path = $request->file('bike_image')->store('bikes', 'public');
            $data['bike_image'] = Storage::url($path);
        }else{
            $data['bike_image'] = $bike->bike_image;
        }

        $bike->update($data);

        return redirect()->route('dashboard')->with('updated', "Tú $bike->marca $bike->modelo se ha sido actualizado con éxito.");
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Bike $bike)
    {
        $bike->delete();

        return redirect()->route('dashboard')->with('destroyed', "Tú $bike->marca $bike->modelo se ha sido eliminado con éxito.");
    }
}
