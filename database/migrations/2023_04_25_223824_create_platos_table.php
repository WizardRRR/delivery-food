<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('platos', function (Blueprint $table) {
            $table->id();
            $table->string('name');
            $table->text('description');
            $table->decimal('precio', 8, 2); // 8 dígitos en total y 2 decimales
            $table->string('foto'); // 8 dígitos en total y 2 decimales
            $table->unsignedBigInteger('category_id');
            $table->boolean('disponibilidad')->default(true);
            $table->timestamps();
            // relacion de muchos a uno
            $table->foreign('category_id')
                ->references('id')
                ->on('categories')
                ->onDelete('cascade');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('platos');
    }
};
