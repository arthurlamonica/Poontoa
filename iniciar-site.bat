@echo off
chcp 65001 > nul
title POONTOA - Servidor de Desenvolvimento
echo ========================================================
echo   POONTOA — AGÊNCIA DE PUBLICIDADE & PERFORMANCE
echo ========================================================
echo.
echo [1/2] Abrindo o site no seu navegador...
start http://localhost:5173/
echo [2/2] Iniciando o servidor Vite local...
echo.
echo O site ficara ativo enquanto esta janela estiver aberta.
echo Pressione Ctrl + C para encerrar o servidor.
echo ========================================================
echo.
cd /d "%~dp0"
cmd.exe /c "npm.cmd run dev"
pause
