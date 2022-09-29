# electronic-signature

installion 

1. composer require electronic/signature

2. php artisan vendor:publish --tag=electronic-signature 

3. add <script src="{{ asset('signature/sign.js') }}"></script> over the end-body tag.

4. add three element (canvas,input(type),button);

e.g. 

    <body>
        <canvas id="mycanvas"></canvas>
        <input type="" class="mysign">
        <button type="button" class="clearSign"></button>
        <script src="{{ asset('signature/sign.js') }}"></script>
    </body>


Notice

After vendor:publish, js file of package will be copyed into public_path with this file path (signature/sign.js)
Then you can customize class name in js file or whatever you want.



