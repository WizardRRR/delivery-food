<?php

namespace App\Http\Controllers;

use App\Models\Category;
use App\Models\Plato;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;
use Inertia\Inertia;

class PlatosController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $categorias = Category::all();
        $platos = Plato::with('categoria')->get();
        // dd($platos);
        return Inertia::render('Dashboard/Dashboard', compact('platos', 'categorias'));
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        $categorias = Category::all();
        return Inertia::render('Dashboard/module_add/Add', compact('categorias'));
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        // dd($request->all());
        $request->validate([
            'nombre' => 'required|max:255',
            'descripcion' => 'required',
            'precio' => 'required|numeric',
            'foto' => ['required', 'image', 'max:3048', 'mimes:jpeg,png,jpg,svg'],
            'category_id' => 'required|exists:categories,id',
        ]);

        $foto = $request->file('foto');
        $fotoName = time() . '.' . $foto->extension();
        $fotoPath = $foto->storeAs('public/profile-photos', $fotoName);

        Plato::create([
            'name' => $request->nombre,
            'description' => $request->descripcion,
            'category_id' => $request->category_id,
            'foto' => Storage::url($fotoPath),
            'precio' => $request->precio,
            'disponibilidad' => true, // Valor por defecto
        ]);

        return redirect()->route('dashboard');
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(string $id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        $plato = Plato::findOrFail($id);
        $request->validate([
            'nombre' => 'required|max:255',
            'descripcion' => 'required',
            'precio' => 'required|numeric',
            'foto' => ['nullable', 'image', 'max:3048', 'mimes:jpeg,png,jpg,svg'],
            'category_id' => 'required|exists:categories,id',
        ]);

        if ($request->hasFile('foto')) {
            Storage::delete($plato->foto);
            $foto = $request->file('foto');
            $fotoName = time() . '.' . $foto->extension();
            $fotoPath = $foto->storeAs('public/profile-photos', $fotoName);
            $plato->foto = Storage::url($fotoPath);
        }

        $plato->name = $request->nombre;
        $plato->description = $request->descripcion;
        $plato->category_id = $request->category_id;
        $plato->precio = $request->precio;

        $plato->save();

        return back();
    }

    /**
     * Remove the specified resource from storage.
     */
    /**
     * Remove the specified resource from storage.
     */
    /**
     * Elimina el recurso especificado del almacenamiento.
     */
    public function destroy(string $id)
    {
        $plato = Plato::findOrFail($id); // Busca el plato con el id dado o devuelve un error 404
        Storage::delete($plato->foto); // Elimina la foto del almacenamiento
        $plato->delete(); // Elimina el plato de la base de datos
        return response()->json([
            'message' => 'El plato ha sido eliminado correctamente.',
        ]);
    }
}
