<?php

namespace Database\Seeders;

// use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Eloquent\Model;
use App\Models\User;
use App\Models\Bike;
use Illuminate\Support\Facades\Storage;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        // \App\Models\User::factory(10)->create();

        // \App\Models\User::factory()->create([
        //     'name' => 'Test User',
        //     'email' => 'test@example.com',
        // ]);
        self::seedTabla();
        $this->command->alert('Tabla inicializada con datos!');
    }

    private function seedTabla(){
        Model::unguard();
        Schema::disableForeignKeyConstraints();

        DB::table('users')->truncate();
        DB::table('bikes')->truncate();

        Storage::deleteDirectory('public/bikes');
        Storage::deleteDirectory('public/avatar');
        Storage::makeDirectory('public/bikes');
        Storage::makeDirectory('public/avatar');

        User::create([
            'name' => 'RiderWorld',
            'email' => 'riderworld@riderworld.es',
            'password' => Hash::make('riderworld'),
            'email_verified_at' => now()
        ]);

        User::create([
            'name' => 'Alessandro',
            'email' => 'alessandro@riderworld.es',
            'password' => Hash::make('123456'),
            'email_verified_at' => now()
        ]);

        Bike::create([
            'marca' => 'Kawasaki',
            'modelo' => 'Ninja 400',
            'año' => '2021',
            'tipo' => 'Sport',
            'cilindrada' => '399 cc',
            'potencia' => '45 cv',
            'numMarchas' => '6',
            'peso' => '168 kg',
            'precio' => 6599,
            'kilometros' => 0,
            'descripcion' => 'La Ninja 400 ofrece un equilibrio perfecto entre buen precio y prestaciones. Con un motor de 399 cc y un chasis ligero, esta deportiva de iniciación es la opción ideal para los nuevos moteros que buscan una máquina con la que crecer.',
            'user_id' => 1
        ]);
        Bike::create([
            'marca' => 'Yamaha',
            'modelo' => 'MT-07',
            'año' => '2021',
            'tipo' => 'Naked',
            'cilindrada' => '689 cc',
            'potencia' => '73,4 cv',
            'numMarchas' => '6',
            'peso' => '184 kg',
            'precio' => 7999,
            'descripcion' => 'La MT-07 es una motocicleta con un diseño minimalista y una imagen agresiva. Su motor de 689 cc y 2 cilindros en paralelo ofrece una potencia lineal y una entrega de par suave para una conducción emocionante y divertida.',
            'kilometros' => 0,
            'user_id' => 1
        ]);


        Model::reguard();
        Schema::enableForeignKeyConstraints();
    }
}
