#!/bin/bash


DIA=$(date +%F)
MUDAR=`ls *.png`


for VAR in $MUDAR
do
    mv $VAR $DIA-$VAR
done