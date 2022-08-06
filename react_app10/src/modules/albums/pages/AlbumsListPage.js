import AlbumsList from '../components/AlbumsList';
import React from 'react';
import useAlbumsList from '../hooks/useAlbumsList';

function AlbumsListPage() {
    const { list } = useAlbumsList();
    return (
        <div>
            AlbumsList
            <AlbumsList list={list} />
        </div>
    );
}

export default AlbumsListPage;
