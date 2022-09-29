# electronic-signature

installion 

1. composer require electronic/signature

2. php artisan vendor:publish --tag=electronic-signature 

3. add <script src="{{ asset('signature/sign.js') }}"></script> over the end-body tag.

4. add three element (canvas,input(type),button);

e.g. 

    <body>
        <canvas id="mycanvas"></canvas>
        <input type="hidden" class="mysign" name="signData">
        <button type="button" class="clearSign"></button>
        <script src="{{ asset('signature/sign.js') }}"></script>
    </body>


Notice

After vendor:publish, js file of package will be copyed into public_path with this file path (signature/sign.js)
Then you can customize class name in js file or whatever you want.

Signature data will be passed into input tag when trigger mourse down event.
Signature Data will be type of base64_encode

>> Convert base64 data into image in laravel.

e.g. Storage::put("signimg/sign1.jpeg",file_get_contents($request->signData));


