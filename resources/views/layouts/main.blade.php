<!DOCTYPE html>
<html lang="{{ app()->getLocale() }}">
<head>
    <meta charset="utf-8" />
    <meta name="csrf-token" content="{{ csrf_token() }}" />

    <title>My QuiZz</title>

    <link rel="stylesheet" href="{{ asset('/css/app.css') }}" type="text/css" />
</head>
<body>
    <header>
        <nav class="nav navbar navbar-fixed-top">

        </nav>
    </header>
    @yield('content')
    <footer>
        <div class="container">
            <div class="row">
                <div class="col-xs-12 col-md-6 text-center">
                    @php
                        $links = [
                            'home' => 'Page d\'accueil',
                        ];
                    @endphp
                    @foreach ($links as $route_name => $text)
                        <p class="text-muted">
                            <a href="{{ route($route_name) }}">{{ $text }}</a>
                        </p>
                    @endforeach
                </div>
                <div class="col-xs-12 col-md-6 text-center">
                    @php
                        $links = [
                            'test' => 'Testing ReactJS ...',
                        ];
                    @endphp
                    @foreach ($links as $route_name => $text)
                        <p class="text-muted">
                            <a href="{{ route($route_name) }}">{{ $text }}</a>
                        </p>
                    @endforeach
                </div>
            </div>
        </div>
    </footer>
    <script src="{{ asset('/js/app.js') }}" charset="utf-8" type="text/javascript"></script>
</body>
</html>
