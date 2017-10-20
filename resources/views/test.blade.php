<!DOCTYPE html>
<html lang="{{ app()->getLocale() }}">
<head>
    <meta charset="utf-8" />
    <meta name="csrf-token" content="{{ csrf_token() }}" />

    <title>React TEST</title>

    <link rel="stylesheet" href="{{ asset('/css/app.css') }}" />
</head>
<body>
    <div class="container">
        <h1 class="page-header">React TEST</h1>
        <div class="row">
            <div class="col-xs-12 col-md-offset-2 col-md-8">
                <div id="example"></div>
            </div>
        </div>
    </div>
    <script src="{{ asset('/js/app.js') }}" charset="utf-8"></script>
</body>
</html>
