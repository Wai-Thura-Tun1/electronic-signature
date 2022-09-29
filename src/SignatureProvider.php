<?php

namespace Electronic\Signature;

use Illuminate\Support\ServiceProvider;

class SignatureProvider extends ServiceProvider {

    public function register()
    {

    }

    public function boot() {
        $this->publishes([__DIR__.'../sign.js' => public_path('signature/sign.js')]);
    }
}
