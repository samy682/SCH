import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ConnectionService {
  private _id: string;
  private _nom: string;
  private _prenom: string;
  private _email: string;
  private _niveau: string;
  public static _instance: ConnectionService = null;

  constructor() { 
    if(ConnectionService._instance === null){
      ConnectionService._instance = this;
    }
    return ConnectionService._instance;
  }

  get id(): string {
    return this._id;
  }

  get nom(): string {
    return this._nom;
  }

  get prenom(): string {
    return this._prenom;
  }

  get email(): string {
    return this._email;
  }

  get niveau(): string {
    return this._niveau;
  }

  set id(newId: string) {
    this._id = newId;
  }

  set nom(newNom: string) {
    this._nom = newNom;
  }

  set prenom(newPrenom: string) {
    this._prenom = newPrenom;
  }

  set email(newEmail: string) {
    this._email = newEmail;
  }

  set niveau(newNiveau: string) {
    this._niveau = newNiveau;
  }

  disconnect():void {
    ConnectionService._instance = null;
    this._id = null;
    this._email = null;
    this._nom = null;
    this._prenom = null;
    this._niveau = null;
  }

}
