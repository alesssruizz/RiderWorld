<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;
use App\Models\User;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('bikes', function (Blueprint $table) {
            $table->id();
            $table->string('marca', 100);
            $table->string('modelo', 100);
            $table->string('año', 4);
            $table->string('tipo', 100)->nullable();
            $table->string('cilindrada', 100)->nullable();
            $table->string('potencia', 100)->nullable();
            $table->string('numMarchas', 100)->nullable();
            $table->string('peso', 100)->nullable();
            $table->integer('precio', unsigned: true);
            $table->integer('kilometros', unsigned: true);
            $table->longText('descripcion');
            $table->foreignIdFor(User::class);
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('bikes');
    }
};
