<?php

namespace App\Http\Controllers;

use App\Http\Requests\BikeRequest;
use App\Models\Bike;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Storage;

class BikeController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {            
        // dd($data);
        // dd(Bike::paginate(10)->items()[0]->user_id);
        return Inertia::render('Welcome', [
            'laravelVersion' => Application::VERSION,
            'phpVersion' => PHP_VERSION,
            'bikes' => Bike::with('user')->latest()->paginate(10)
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
    public function store(BikeRequest $request)
    {
        $data = $request->validated();

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
         $this->authorize('update', $bike);

        return Inertia::render('Dashboard/Motos/EditarMoto', [
            'bike' => $bike
        ]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(BikeRequest $request, Bike $bike)
    {
        $this->authorize('update', $bike);

        $data = $request->validated();
        
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
        $this->authorize('delete', $bike);

        $bike->delete();

        return redirect()->route('dashboard')->with('destroyed', "Tú $bike->marca $bike->modelo se ha sido eliminado con éxito.");
    }
}
