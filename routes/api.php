<?php

use Illuminate\Http\Request;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});

Route::get('/randomuser', function () {
    return response()->json([
        'results' => [
            [
                'gender' => rand() % 2 ? 'male' : 'female',
                'name' => [
                    'first' => str_random(8),
                    'last' => str_random(8),
                ],
            ],
        ],
    ]);
});
