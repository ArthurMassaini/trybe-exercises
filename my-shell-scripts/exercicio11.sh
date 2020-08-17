#!/bin/bash

    
    

    DIA=$(date +%F)
    MUDAR=`ls *.$2`
    
    cd $1

    for VAR in $MUDAR
    do
        echo "Nome foi trocado disso: $VAR"
        mv $VAR $DAY-$FILE
        echo "Para isso: $DAY-$VAR"
    done