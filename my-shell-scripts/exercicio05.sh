#!/bin/bash


    read -p "Digite o caminho de um arquivo ou diretório:" VAR
    

    if [ -f "$VAR" ]
    then
        echo "$VAR é um arquivo comum"
    elif [ -d "$VAR" ]
    then
        echo "$VAR é um diretório"
    else
        echo "$VAR é outro tipo de arquivo"
    fi

    ls -lg $VAR