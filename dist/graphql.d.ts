export declare class CreateAlbumInput {
    name: string;
    released?: Nullable<number>;
    artistsIds?: Nullable<Nullable<string>[]>;
    bandsIds?: Nullable<Nullable<string>[]>;
    trackIds?: Nullable<Nullable<string>[]>;
    genresIds?: Nullable<Nullable<string>[]>;
    image?: Nullable<string>;
}
export declare class UpdateAlbumInput {
    name?: Nullable<string>;
    released?: Nullable<number>;
    artistsIds?: Nullable<Nullable<string>[]>;
    bandsIds?: Nullable<Nullable<string>[]>;
    trackIds?: Nullable<Nullable<string>[]>;
    genresIds?: Nullable<Nullable<string>[]>;
    image?: Nullable<string>;
}
export declare class CreateArtistInput {
    firstName: string;
    secondName: string;
    country: string;
    middleName?: Nullable<string>;
    birthDate?: Nullable<string>;
    birthPlace?: Nullable<string>;
    bandsIds?: Nullable<Nullable<string>[]>;
    instruments?: Nullable<Nullable<string>[]>;
}
export declare class UpdateArtistInput {
    firstName?: Nullable<string>;
    secondName?: Nullable<string>;
    middleName?: Nullable<string>;
    birthDate?: Nullable<string>;
    birthPlace?: Nullable<string>;
    country?: Nullable<string>;
    bandsIds?: Nullable<Nullable<string>[]>;
    instruments?: Nullable<Nullable<string>[]>;
}
export declare class MemberInput {
    artist?: Nullable<string>;
    instrument?: Nullable<string>;
    years?: Nullable<string>;
}
export declare class CreateBandInput {
    name: string;
    origin?: Nullable<string>;
    members?: Nullable<Nullable<MemberInput>[]>;
    website?: Nullable<string>;
    genresIds?: Nullable<Nullable<string>[]>;
}
export declare class UpdateBandInput {
    name?: Nullable<string>;
    origin?: Nullable<string>;
    members?: Nullable<Nullable<MemberInput>[]>;
    website?: Nullable<string>;
    genresIds?: Nullable<Nullable<string>[]>;
}
export declare class CreateGenreInput {
    name: string;
    description?: Nullable<string>;
    country?: Nullable<string>;
    year?: Nullable<number>;
}
export declare class UpdateGenreInput {
    name?: Nullable<string>;
    description?: Nullable<string>;
    country?: Nullable<string>;
    year?: Nullable<number>;
}
export declare class CreateTrackInput {
    title: string;
    albumId?: Nullable<string>;
    artistsIds?: Nullable<Nullable<string>[]>;
    bandsIds?: Nullable<Nullable<string>[]>;
    duration?: Nullable<number>;
    released?: Nullable<number>;
    genresIds?: Nullable<Nullable<string>[]>;
}
export declare class UpdateTrackInput {
    title: string;
    albumId?: Nullable<string>;
    artistsIds?: Nullable<Nullable<string>[]>;
    bandsIds?: Nullable<Nullable<string>[]>;
    duration?: Nullable<number>;
    released?: Nullable<number>;
    genresIds?: Nullable<Nullable<string>[]>;
}
export declare class Album {
    id: string;
    name?: Nullable<string>;
    released?: Nullable<number>;
    artists?: Nullable<Nullable<Artist>[]>;
    bands?: Nullable<Nullable<Band>[]>;
    tracks?: Nullable<Nullable<Track>[]>;
    genres?: Nullable<Nullable<Genre>[]>;
    image?: Nullable<string>;
}
export declare abstract class IQuery {
    abstract albums(limit?: Nullable<number>, offset?: Nullable<number>): Nullable<Album>[] | Promise<Nullable<Album>[]>;
    abstract album(id: string): Nullable<Album> | Promise<Nullable<Album>>;
    abstract artists(limit?: Nullable<number>, offset?: Nullable<number>): Nullable<Nullable<Artist>[]> | Promise<Nullable<Nullable<Artist>[]>>;
    abstract artist(id: string): Nullable<Artist> | Promise<Nullable<Artist>>;
    abstract bands(limit?: Nullable<number>, offset?: Nullable<number>): Nullable<Nullable<Band>[]> | Promise<Nullable<Nullable<Band>[]>>;
    abstract band(id: string): Nullable<Band> | Promise<Nullable<Band>>;
    abstract favourites(): Favourites | Promise<Favourites>;
    abstract genres(limit?: Nullable<number>, offset?: Nullable<number>): Nullable<Nullable<Genre>[]> | Promise<Nullable<Nullable<Genre>[]>>;
    abstract genre(id: string): Nullable<Genre> | Promise<Nullable<Genre>>;
    abstract tracks(limit?: Nullable<number>, offset?: Nullable<number>): Nullable<Nullable<Track>[]> | Promise<Nullable<Nullable<Track>[]>>;
    abstract track(id: string): Nullable<Track> | Promise<Nullable<Track>>;
    abstract jwt(email: string, password: string): Nullable<JWT> | Promise<Nullable<JWT>>;
    abstract user(id: string): Nullable<User> | Promise<Nullable<User>>;
}
export declare abstract class IMutation {
    abstract createAlbum(createAlbumInput: CreateAlbumInput): Album | Promise<Album>;
    abstract updateAlbum(id: string, updateAlbumInput: UpdateAlbumInput): Album | Promise<Album>;
    abstract deleteAlbum(id: string): Nullable<Delete> | Promise<Nullable<Delete>>;
    abstract createArtist(createArtistInput: CreateArtistInput): Artist | Promise<Artist>;
    abstract updateArtist(id: string, updateArtistInput?: Nullable<UpdateArtistInput>): Artist | Promise<Artist>;
    abstract deleteArtist(id: string): Nullable<Delete> | Promise<Nullable<Delete>>;
    abstract createBand(createBandInput: CreateBandInput): Band | Promise<Band>;
    abstract updateBand(id: string, updateBandInput?: Nullable<UpdateBandInput>): Band | Promise<Band>;
    abstract deleteBand(id: string): Nullable<Delete> | Promise<Nullable<Delete>>;
    abstract addArtistToFavourites(id?: Nullable<string>): Favourites | Promise<Favourites>;
    abstract addBandToFavourites(id?: Nullable<string>): Favourites | Promise<Favourites>;
    abstract addGenreToFavourites(id?: Nullable<string>): Favourites | Promise<Favourites>;
    abstract addTrackToFavourites(id?: Nullable<string>): Favourites | Promise<Favourites>;
    abstract createGenre(createGenreInput: CreateGenreInput): Genre | Promise<Genre>;
    abstract updateGenre(id: string, updateGenreInput?: Nullable<UpdateGenreInput>): Genre | Promise<Genre>;
    abstract deleteGenre(id: string): Nullable<Delete> | Promise<Nullable<Delete>>;
    abstract createTrack(createTrackInput: CreateTrackInput): Track | Promise<Track>;
    abstract updateTrack(id: string, updateTrackInput?: Nullable<UpdateTrackInput>): Track | Promise<Track>;
    abstract deleteTrack(id: string): Nullable<Delete> | Promise<Nullable<Delete>>;
    abstract register(firstName: string, lastName: string, password: string, email: string): User | Promise<User>;
}
export declare class Artist {
    id: string;
    firstName?: Nullable<string>;
    secondName?: Nullable<string>;
    middleName?: Nullable<string>;
    birthDate?: Nullable<string>;
    birthPlace?: Nullable<string>;
    country?: Nullable<string>;
    bands?: Nullable<Nullable<Band>[]>;
    instruments?: Nullable<Nullable<string>[]>;
}
export declare class Band {
    id: string;
    name?: Nullable<string>;
    origin?: Nullable<string>;
    members?: Nullable<Nullable<Member>[]>;
    website?: Nullable<string>;
    genres?: Nullable<Nullable<Genre>[]>;
}
export declare class Member {
    artist?: Nullable<string>;
    instrument?: Nullable<string>;
    years?: Nullable<string>;
}
export declare class Favourites {
    id: string;
    userId?: Nullable<string>;
    bands?: Nullable<Nullable<Band>[]>;
    genres?: Nullable<Nullable<Genre>[]>;
    artists?: Nullable<Nullable<Artist>[]>;
    tracks?: Nullable<Nullable<Track>[]>;
}
export declare class Genre {
    id: string;
    name?: Nullable<string>;
    description?: Nullable<string>;
    country?: Nullable<string>;
    year?: Nullable<number>;
}
export declare class Track {
    id: string;
    title: string;
    album?: Nullable<Album>;
    artists?: Nullable<Nullable<Artist>[]>;
    bands?: Nullable<Nullable<Band>[]>;
    duration?: Nullable<number>;
    released?: Nullable<number>;
    genres?: Nullable<Nullable<Genre>[]>;
}
export declare class User {
    id: string;
    firstName: string;
    lastName: string;
    password: string;
    email: string;
}
export declare class JWT {
    jwt?: Nullable<string>;
}
export declare class Delete {
    acknowledged?: Nullable<boolean>;
    deletedCount?: Nullable<number>;
}
declare type Nullable<T> = T | null;
export {};
