import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router';

import * as S from './styled';

export default function Repostories(){
    const history = useHistory()
    const [ repositories, setRepositories] = useState([])
    useEffect(() => {
        let repositoriesName = localStorage.getItem('repositoriesName')
        if( repositoriesName !== null){
            repositoriesName = JSON.parse(repositoriesName)
            setRepositories(repositoriesName)
            localStorage.clear()
        } else{
            history.push('/')
        }
        
    }, []);

    return(
        <S.Container>
            <S.Title>Repostories</S.Title>
            <S.List>
                { repositories.map(repository => {
                    return(
                        <S.ListItem>{ repository }</S.ListItem>
                    )
                })}
            </S.List>
            <S.LinkHome to='/'>Voltar</S.LinkHome>
        </S.Container>
    )
}

