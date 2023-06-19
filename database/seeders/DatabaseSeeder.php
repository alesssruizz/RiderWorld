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
            'email_verified_at' => now(),
            'profile_image' => '/storage/default/default.webp'
        ]);

        User::create([
            'name' => 'Alessandro',
            'email' => 'alessandro@riderworld.es',
            'password' => Hash::make('123456'),
            'email_verified_at' => now(),
            'profile_image' => '/storage/default/alessImage.jpg'
        ]);

        User::create([
            'name' => 'Alberto',
            'email' => 'alberto@riderworld.es',
            'password' => Hash::make('123456'),
            'email_verified_at' => now()
        ]);

        $motos = [
            [
                'marca' => "Ducati",
                'modelo' => "Unica",
                'año' => 2021,
                'tipo' => "Custom",
                'cilindrada' => 1262,
                'potencia' => 162,
                'numMarchas' => 6,
                'peso' => 247,
                'precio' => 21900,
                'kilometros' => 0,
                'descripcion' => "La Ducati Unica es una moto que combina el estilo de una cruiser con el rendimiento de una naked. Tiene un motor tetracilindrico Testastretta DVT de 1262 cc que ofrece una potencia de 162 CV y un par de 129 Nm. Cuenta con un chasis de aluminio, una suspensión Öhlins, un sistema de frenos Brembo, un control de tracción, un ABS, un control de crucero, un cambio rápido y tres modos de conducción.",
                'bike_image' => "/storage/default/1.webp",
                "user_id" => 2
            ],
            [
                'marca' => "Ducati",
                'modelo' => "SuperSport 950",
                'año' => 2022,
                'tipo' => "Sport-turismo",
                'cilindrada' => 937,
                'potencia' => 110,
                'numMarchas' => 6,
                'peso' => 210,
                'precio' => 15590,
                'kilometros' => 0,
                'descripcion' => "La SuperSport 950 es una moto que combina el estilo deportivo de las Panigale con la comodidad y versatilidad para el uso diario y los viajes largos. Tiene un motor bicilíndrico Testastretta 11° que ofrece una potencia de 110 CV y un par de 96,7 Nm. Cuenta con un diseño renovado, una pantalla TFT a color, un control de tracción, un ABS y un cambio rápido.",
                'bike_image' => "/storage/default/2.webp"
            ],
            [
                'marca' => "BMW",
                'modelo' => "S 1000 RR",
                'año' => 2021,
                'tipo' => "Supersport",
                'cilindrada' => 999,
                'potencia' => 207,
                'numMarchas' => 6,
                'peso' => 197,
                'precio' => 19900,
                'kilometros' => 0,
                'descripcion' => "La S 1000 RR es una moto que representa la máxima expresión de la deportividad de BMW, con un motor de cuatro cilindros en línea que ofrece una potencia de 207 CV y un par de 113 Nm. Tiene un chasis ligero y ágil, una suspensión electrónica, un sistema de frenos ABS Pro, un control dinámico de tracción, cuatro modos de conducción y un cambio rápido asistido.",
                'bike_image' => "/storage/default/3.webp"
            ],
            [
                'marca' => 'KTM',
                'modelo' => 'RC16 MotoGP',
                'año' => 2023,
                'tipo' => 'Competicion',
                'cilindrada' => '1000 cc',
                'potencia' => '250 hp',
                'numMarchas' => 6,
                'peso' => '160 kg',
                'precio' => 50000,
                'kilometros' => rand(0, 100000),
                'descripcion' => 'La KTM RC16 MotoGP es una moto de competición de alto rendimiento utilizada en el campeonato de MotoGP.',
                'bike_image' => '/storage/default/4.webp',
                "user_id" => 2
            ],
            [
                'marca' => 'Kawasaki',
                'modelo' => 'Ninja ZX 10R',
                'año' => 2010,
                'tipo' => 'Superbike',
                'cilindrada' => '1000 cc',
                'potencia' => '200 hp',
                'numMarchas' => 6,
                'peso' => '200 kg',
                'precio' => 15000,
                'kilometros' => rand(0, 100000),
                'descripcion' => 'La Kawasaki Ninja ZX 10R es una motocicleta deportiva de alta potencia y rendimiento.',
                'bike_image' => '/storage/default/5.webp'
            ],
            [
                'marca' => 'MV Agusta',
                'modelo' => 'F3',
                'año' => 2018,
                'tipo' => 'Supersport',
                'cilindrada' => '800 cc',
                'potencia' => '145 hp',
                'numMarchas' => 6,
                'peso' => '175 kg',
                'precio' => 18000,
                'kilometros' => rand(0, 100000),
                'descripcion' => 'La MV Agusta F3 es una motocicleta deportiva con un diseño elegante y un rendimiento excepcional.',
                'bike_image' => '/storage/default/6.webp'
            ],
            [
                'marca' => 'Aprilia',
                'modelo' => 'RSV 1000',
                'año' => 2007,
                'tipo' => 'Sport',
                'cilindrada' => '1000 cc',
                'potencia' => '140 hp',
                'numMarchas' => 6,
                'peso' => '190 kg',
                'precio' => 10000,
                'kilometros' => 25000,
                'descripcion' => 'La Aprilia RSV 1000 es una motocicleta deportiva de alto rendimiento con un diseño aerodinámico.',
                'bike_image' => '/storage/default/7.webp'
            ],
            [
                'marca' => 'Yamaha',
                'modelo' => 'R6',
                'año' => 2002,
                'tipo' => 'Supersport',
                'cilindrada' => '600 cc',
                'potencia' => '120 hp',
                'numMarchas' => 6,
                'peso' => '170 kg',
                'precio' => 5000,
                'kilometros' => 40000,
                'descripcion' => 'La Yamaha R6 es una motocicleta deportiva de alta gama con una combinación perfecta de potencia y manejo.',
                'bike_image' => '/storage/default/8.webp'
            ],
            [
                'marca' => 'Yamaha',
                'modelo' => 'R6',
                'año' => 2018,
                'tipo' => 'Supersport',
                'cilindrada' => '600 cc',
                'potencia' => '125 hp',
                'numMarchas' => 6,
                'peso' => '175 kg',
                'precio' => 8000,
                'kilometros' => 10000,
                'descripcion' => 'La Yamaha R6 es una motocicleta deportiva.',
                'bike_image' => '/storage/default/9.webp'
            ],
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


        ];

        foreach ($motos as $moto) {
            $moto = Bike::create($moto);
            $moto->save();
        }

        Model::reguard();
        Schema::enableForeignKeyConstraints();
    }
}
