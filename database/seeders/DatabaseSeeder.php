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

    private function seedTabla()
    {
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

        $motos = [
            [
                'marca' => 'Honda',
                'modelo' => 'CBR 1000 RR',
                'año' => 2020,
                'tipo' => 'Deportiva',
                'cilindrada' => 1000,
                'potencia' => 217,
                'numMarchas' => 6,
                'peso' => 201,
                'precio' => 19999,
                'kilometros' => 0,
                'descripcion' => 'La moto más rápida y potente de Honda',
                // 'bike_image' => 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9b/Honda_CBR1000RR_2020.jpg/1200px-Honda_CBR1000RR_2020.jpg'
            ],
            [
                'marca' => 'Yamaha',
                'modelo' => 'MT-07',
                'año' => 2019,
                'tipo' => 'Naked',
                'cilindrada' => 689,
                'potencia' => 74,
                'numMarchas' => 6,
                'peso' => 182,
                'precio' => 6999,
                'kilometros' => 0,
                'descripcion' => 'Una moto versátil y divertida para el día a día',
                // 'bike_image' => 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/8c/Yamaha_MT-07_2019.jpg/1200px-Yamaha_MT-07_2019.jpg'
            ],
            [
                'marca' => 'Suzuki',
                'modelo' => 'GSX-R 750',
                'año' => 2018,
                'tipo' => 'Deportiva',
                'cilindrada' => 750,
                'potencia' => 150,
                'numMarchas' => 6,
                'peso' => 190,
                'precio' => 13999,
                'kilometros' => 0,
                'descripcion' => 'Una moto deportiva con un equilibrio perfecto entre potencia y manejabilidad',
                // 'bike_image' => 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/7f/Suzuki_GSX-R_750_2018.jpg/1200px-Suzuki_GSX-R_750_2018.jpg'
            ],
            [
                'marca' => 'Kawasaki',
                'modelo' => 'Z900',
                'año' => 2021,
                'tipo' => 'Naked',
                'cilindrada' => 948,
                'potencia' => 125,
                'numMarchas' => 6,
                'peso' => 212,
                'precio' => 9999,
                'kilometros' => 0,
                'descripcion' => 'Una moto naked con un diseño agresivo y un motor potente',
                // 'bike_image' => 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Kawasaki_Z900_2021.jpg/1200px-Kawasaki_Z900_2021.jpg'
            ],
            [
                'marca' => 'BMW',
                'modelo' => 'R 1250 GS',
                'año' => 2020,
                'tipo' => 'Trail',
                'cilindrada' => 1254,
                'potencia' => 136,
                'numMarchas' => 6,
                'peso' => 249,
                'precio' => 18900,
                'kilometros' => rand(0, 50000),
                'descripcion' => 'Una moto trail con un alto rendimiento y una gran versatilidad',
                // 'bike_image' => 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/BMW_R_1250_GS_2020.jpg/1200px-BMW_R_1250_GS_2020.jpg'
            ],
            [
                'marca' => 'Ducati',
                'modelo' => 'Monster 821',
                'año' => 2019,
                'tipo' => 'Naked',
                'cilindrada' => 821,
                'potencia' => 109,
                'numMarchas' => 6,
                'peso' => 206,
                'precio' => 11990,
                'kilometros' => rand(0, 50000),
                'descripcion' => 'Una moto naked con un diseño icónico y un carácter deportivo',
                // 'bike_image' => 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3c/Ducati_Monster_821_2019.jpg/1200px-Ducati_Monster_821_2019.jpg'
            ],
            [
                'marca' =>    'Honda',
                'modelo' =>    'Africa Twin',
                'año' =>    2021,
                'tipo' =>    'Trail',
                'cilindrada' =>    1084,
                'potencia' =>    102,
                'numMarchas' =>    6,
                'peso' =>    226,
                'precio' =>    14999,
                'kilometros' =>    rand(0, 50000),
                'descripcion' =>    "Una moto trail con una gran capacidad de aventura y una tecnología avanzada",
                //"bike_image"=> "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cb/Honda_Africa_Twin_2021.jpg/1200px-Honda_Africa_Twin_2021.jpg"
            ],
            [
                'marca' =>    "Yamaha",
                'modelo' =>    "R1",
                'año' =>    2020,
                'tipo' =>    "Deportiva",
                "cilindrada" => 998,
                "potencia" => 200,
                "numMarchas" => 6,
                "peso" => 201,
                "precio" => 21999,
                "kilometros" => rand(0, 50000),
                "descripcion" => "Una moto deportiva con un alto nivel de prestaciones y una electrónica de vanguardia",
                //"bike_image"=>"https://upload.wikimedia.org/wikipedia/commons/thumb/1/1a/Yamaha_R1_2020.jpg/1200px-Yamaha_R1_2020.jpg"
            ],
            [
                'marca' =>    "Suzuki",
                'modelo' =>    "V-Strom 650",
                'año' =>    2019,
                'tipo' =>    "Trail",
                "cilindrada" => 645,
                "potencia" => 71,
                "numMarchas" => 6,
                "peso" => 213,
                "precio" => 8999,
                "kilometros" => rand(0, 50000),
                "descripcion" => "Una moto trail con un buen equilibrio entre confort y rendimiento",
                //"bike_image"=>"https://upload.wikimedia.org/wikipedia/commons/thumb/4/4f/Suzuki_V-Strom_650_2019.jpg/1200px-Suzuki_V-Strom_650_2019.jpg"
            ],
            [
                'marca' =>    "Kawasaki",
                'modelo' =>    "Ninja 400",
                'año' =>    2020,
                'tipo' =>    "Deportiva",
                "cilindrada" => 399,
                "potencia" => 49,
                "numMarchas" => 6,
                "peso" => 168,
                "precio" => 5999,
                "kilometros" => rand(0, 50000),
                "descripcion" => "Una moto deportiva con un diseño inspirado en las motos de competición y una buena relación peso-potencia",
                //"bike_image"=>"https://upload.wikimedia.org/wikipedia/commons/thumb/7/7c/Kawasaki_Ninja_400_2020.jpg/1200px-Kawasaki_Ninja_400_2020.jpg"
            ],
            [
                'marca' => "BMW",
                'modelo' => "F 900 R",
                'año' => 2020,
                'tipo' => "Naked",
                'cilindrada' => 895,
                'potencia' => 105,
                'numMarchas' => 6,
                'peso' => 211,
                'precio' => 9990,
                'kilometros' => rand(0, 50000),
                'descripcion' => "Una moto naked con un estilo dinámico y una gran agilidad",
                // 'bike_image'=> "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/BMW_F_900_R_2020.jpg/1200px-BMW_F_900_R_2020.jpg"
            ],
            [
                'marca' => "Ducati",
                'modelo' => "Multistrada V4",
                'año' => 2021,
                'tipo' => "Trail",
                'cilindrada' => 1158,
                'potencia' => 170,
                'numMarchas' => 6,
                'peso' => 240,
                'precio' => 19990,
                'kilometros' => rand(0, 50000),
                'descripcion' => "Una moto trail con un motor potente y una gran capacidad de adaptación a diferentes terrenos",
                // 'bike_image' => "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fb/Ducati_Multistrada_V4_2021.jpg/1200px-Ducati_Multistrada_V4_2021.jpg"
            ],
            [
                'marca' => 'Yamaha',
                'modelo' => 'R7',
                'año' => 2021,
                'tipo' => 'Deportiva',
                'cilindrada' => 689,
                'potencia' => 73,
                'numMarchas' => 6,
                'peso' => 188,
                'precio' => 8999,
                'kilometros' => rand(0, 50000),
                'descripcion' => 'Una moto deportiva con un diseño inspirado en las motos de carreras y una buena relación peso-potencia',
                // 'bike_image' => 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/0c/Yamaha_R7_2021.jpg/1200px-Yamaha_R7_2021.jpg'
            ],
            [
                'marca' => 'Yamaha',
                'modelo' => 'R6',
                'año' => 2020,
                'tipo' => 'Deportiva',
                'cilindrada' => 599,
                'potencia' => 118,
                'numMarchas' => 6,
                'peso' => 190,
                'precio' => 13999,
                'kilometros' => rand(0, 50000),
                'descripcion' => 'Una moto deportiva con un alto rendimiento y una electrónica avanzada',
                // 'bike_image' => 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9f/Yamaha_R6_2020.jpg/1200px-Yamaha_R6_2020.jpg'
            ],
            [
                'marca' =>    "Yamaha",
                'modelo' =>    "R125",
                'año' =>    2019,
                'tipo' =>    "Deportiva",
                "cilindrada" => 125,
                "potencia" => 15,
                "numMarchas" => 6,
                "peso" => 142,
                "precio" => 4999,
                "kilometros" => rand(0, 50000),
                "descripcion" => "Una moto deportiva con un diseño atractivo y una buena manejabilidad",
                //"bike_image"=>"https://upload.wikimedia.org/wikipedia/commons/thumb/8/8c/Yamaha_R125_2019.jpg/1200px-Yamaha_R125_2019.jpg"
            ],
            [
                'marca' =>    "Honda",
                'modelo' =>    "CB650R",
                'año' =>    2021,
                'tipo' =>    "Naked",
                "cilindrada" => 649,
                "potencia" => 95,
                "numMarchas" => 6,
                "peso" => 202,
                "precio" => 8999,
                "kilometros" => rand(0, 50000),
                "descripcion" => "Una moto naked con un estilo neo-retro y un motor de cuatro cilindros",
                //"bike_image"=>"https://upload.wikimedia.org/wikipedia/commons/thumb/4/4b/Honda_CB650R_2021.jpg/1200px-Honda_CB650R_2021.jpg"
            ],
            [
                'marca' => "Suzuki",
                'modelo' => "Katana",
                'año' => 2019,
                'tipo' => "Naked",
                'cilindrada' => 999,
                'potencia' => 150,
                'numMarchas' => 6,
                'peso' => 215,
                'precio' => 14499,
                'kilometros' => rand(0, 50000),
                'descripcion' => "Una moto naked con un diseño inspirado en la legendaria Katana de los años 80",
                //"bike_image"=> "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Suzuki_Katana_2019.jpg/1200px-Suzuki_Katana_2019.jpg"
            ],
            [
                'marca' => "Kawasaki",
                'modelo' => "Z650",
                'año' => 2020,
                'tipo' => "Naked",
                'cilindrada' => 649,
                'potencia' => 68,
                'numMarchas' => 6,
                'peso' => 187,
                'precio' => 6999,
                'kilometros' => rand(0, 50000),
                'descripcion' => "Una moto naked con un diseño minimalista y un motor bicilíndrico",
                // 'bike_image'=> "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Kawasaki_Z650_2020.jpg/1200px-Kawasaki_Z650_2020.jpg"
            ],
            [
                'marca' => "BMW",
                'modelo' => "S 1000 RR",
                'año' => 2019,
                'tipo' => "Deportiva",
                'cilindrada' => 999,
                'potencia' => 207,
                'numMarchas' => 6,
                'peso' => 197,
                'precio' => 19900,
                'kilometros' => rand(0, 50000),
                'descripcion' => "Una moto deportiva con un alto nivel de prestaciones y una electrónica de vanguardia",
                // 'bike_image'=> "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/BMW_S_1000_RR_2019.jpg/1200px-BMW_S_1000_RR_2019.jpg"
            ],
            [
                'marca' => "Ducati",
                'modelo' => "Scrambler 1100",
                'año' => 2018,
                'tipo' => "Naked",
                'cilindrada' => 1079,
                'potencia' => 86,
                'numMarchas' => 6,
                'peso' => 206,
                'precio' => 12990,
                'kilometros' => rand(0, 50000),
                'descripcion' => "Una moto naked con un estilo retro y un motor bicilíndrico",
                // 'bike_image'=> "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3c/Ducati_Scrambler_1100_2018.jpg/1200px-Ducati_Scrambler_1100_2018.jpg"
            ],
            [
                'marca' => "Honda",
                'modelo' => "CBR 500 R",
                'año' => 2019,
                'tipo' => "Deportiva",
                'cilindrada' => 471,
                'potencia' => 47,
                'numMarchas' => 6,
                'peso' => 192,
                'precio' => 6499,
                'kilometros' => rand(0, 50000),
                'descripcion' => "Una moto deportiva con un diseño aerodinámico y un motor bicilíndrico",
                // 'bike_image' => 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4f/Honda_CBR_500_R_2019.jpg/1200px-Honda_CBR_500_R_2019.jpg'
            ]
        ];

        foreach ($motos as $moto) {
            $moto = Bike::create($moto);
            $moto->save();
        }

        Model::reguard();
        Schema::enableForeignKeyConstraints();
    }
}
