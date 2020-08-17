 #!/bin/bash

   
    if [ -d "$1" ]
    then
        VAR=`ls -lg $1 | wc -l`
        echo "O $1 tem $VAR arquivos."
    else
        echo "O parâmetro $1 não é um diretório"
    fi
