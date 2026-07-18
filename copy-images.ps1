$src = "c:\Users\amyba\OneDrive\Desktop\DHDS\02_PROJETOS\KENY LORENA RESTAURANTE SHISHA BAR"
$dst = "$src\05_SITE\public\images"

New-Item -ItemType Directory -Force -Path $dst | Out-Null

Copy-Item "$src\01_LOGO\LOGO.PNG.jpeg"                    "$dst\logo.jpeg"          -Force
Copy-Item "$src\01_LOGO\LOGO.SVG.jpeg"                    "$dst\logo-svg.jpeg"      -Force
Copy-Item "$src\02_IMAGENS\HERO\HERO-01.jpeg"             "$dst\hero-restaurante.jpeg" -Force
Copy-Item "$src\02_IMAGENS\HERO\HERO-02.jpeg"             "$dst\hero-lounge.jpeg"   -Force
Copy-Item "$src\02_IMAGENS\LOUNGE\LOUNGE ALL.jpeg"        "$dst\lounge-all.jpeg"    -Force
Copy-Item "$src\02_IMAGENS\LOUNGE\LOUNGE CABINE.jpeg"     "$dst\lounge-cabine.jpeg" -Force
Copy-Item "$src\02_IMAGENS\LOUNGE\LOUNGE ENTRADA.jpeg"    "$dst\lounge-entrada.jpeg" -Force
Copy-Item "$src\02_IMAGENS\LOUNGE\LOUNGE SHISHA.jpeg"     "$dst\lounge-shisha.jpeg" -Force
Copy-Item "$src\02_IMAGENS\RESTAURANTE\REST-01.jpeg"      "$dst\rest-01.jpeg"       -Force
Copy-Item "$src\02_IMAGENS\RESTAURANTE\REST.02.jpeg"      "$dst\rest-02.jpeg"       -Force

Write-Host "=== IMAGENS COPIADAS COM SUCESSO ===" -ForegroundColor Green
Get-ChildItem $dst | Select-Object Name, Length
