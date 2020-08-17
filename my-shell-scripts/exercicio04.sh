#!/bin/bash


    VAR=`pwd`

    if [ -e "$VAR" ]
    then
        echo "O caminho $VAR está habilitado!"
    fi

    if [ -w "$VAR" ]
    then
        echo "Você tem permissão para editar $VAR"
    else
        echo "Você NÃO foi autorizado a editar $VAR"
    fi     
