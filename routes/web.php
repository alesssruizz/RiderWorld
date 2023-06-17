<?php

use App\Http\Controllers\BikeController;
use App\Http\Controllers\ProfileController;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use Illuminate\Http\Request;
use App\Models\User;
use Illuminate\Support\Facades\DB;
use App\Models\Bike;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', [BikeController::class, 'index'])->name('welcome');

Route::middleware(['auth', 'verified'])->group(function () {
    
    Route::get('dashboard', function () {
        $bikes = auth()->user()->bikes()->with('user')->latest()->paginate(10);
        // dd($bikes);
        if(session()->get('created') || session()->get('updated') || session()->get('destroyed')){

            $flashMessage = session()->get('created') ?? session()->get('updated') ?? session()->get('destroyed');
            return Inertia::render('Dashboard', [
                'flashMessage' => $flashMessage,
                'bikes' => $bikes,
            ]);
        }

        return Inertia::render('Dashboard', compact('bikes'));
        
    })->name('dashboard');
    
    
    
    Route::get('/bikes/create', [BikeController::class, 'create'])->name('bikes.create');
    Route::post('/bikes', [BikeController::class, 'store'])->name('bikes.store');
    Route::get('/bikes/{bike}/edit', [BikeController::class, 'edit'])->name('bikes.edit');
    Route::put('/bikes/{bike}', [BikeController::class, 'update'])->name('bikes.update');
    Route::delete('/bikes/{bike}', [BikeController::class, 'destroy'])->name('bikes.destroy');
});

Route::get('/bikes/{bike}', [BikeController::class, 'show'])->name('bikes.show');

Route::get('/pruebas', function (Request $request) {
    $data = null;

    if( $request->has('name') ){
        switch($request->input('name')){
            case 'Alessandro':

                $data = DB::table('users')->select('id', 'email as name')->get();

            break;
            default:
                // dd('No se encontro el nombre');
            break;
        }
    }

    return Inertia::render('Pruebas', [
        'parameters' => $request->all(),
        'modelo' => $data
    ]);
})->name('pruebas');


Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});
require __DIR__.'/auth.php';