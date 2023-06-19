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
        
        
        if(request('marca') && request('modelo') && request('año')){
            $bikes = Bike::where('marca', request('marca'))
            ->where('modelo', request('modelo'))
            ->where('año', request('año'))
            ->with('user')
            ->latest()
            ->paginate(10)
            ->withQueryString();
        }elseif(request('marca') && request('modelo')){
            $bikes = Bike::where('marca', request('marca'))
            ->where('modelo', request('modelo'))
            ->with('user')
            ->latest()
            ->paginate(10)
            ->withQueryString();
        }elseif (request('marca')){
            $bikes = Bike::where('marca', request('marca'))
            ->with('user')
            ->latest()
            ->paginate(10)
            ->withQueryString();
        }else{
            $bikes = Bike::with('user')->latest()->paginate(10);
        }
        // dd($bikes);
        
        
        $año = Bike::select('año')->where('marca', request('marca'))->where('modelo', request('modelo'))->distinct()->get()->pluck('año');
        // dd(request('marca'));
        $modelo = Bike::select('modelo')->where('marca', request('marca'))->distinct()->get()->pluck('modelo');
        return Inertia::render('Welcome', [
            'laravelVersion' => Application::VERSION,
            'phpVersion' => PHP_VERSION,
            'bikes' => $bikes,
            'filters' => [
                'marca' => Bike::select('marca')->distinct()->get()->pluck('marca'),
                'modelo' => $modelo ?? [''],
                'año' => $año ?? ['']
            ]
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

        return redirect()->route('dashboard')->with('created', "Tú $bike->marca $bike->modelo se ha publicado con éxito.");
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
        // dd(request());
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

    public function buy(Bike $bike)
    {
        // dd(request());
        $bike->update([
            'user_id' => auth()->id()
        ]);

        return redirect()->route('dashboard')->with('updated', "Has comprado una $bike->marca $bike->modelo. Enhorabuena!");
    }
}
