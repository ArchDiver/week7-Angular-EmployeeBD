import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class EmpCrudService {

  constructor(public afs: AngularFirestore) { }


  /**
   * 
   * @param empFirstName
   * @param empLastName  
   * @param empAddress 
   * @param empDOB 
   * 
   * Returns a firestore reference and adds info to the database
   * 
   * Returns a Promise of new data 
   */
  create_Emp(empFirstName,empLastName,empAddress,empDOB){
    return this.afs.collection('emp').add({
      empFirstName: empFirstName,
      empLastName: empLastName,
      empAddress: empAddress,
      empDOB: empDOB
    })
  }

  /**
   * No Params
   * 
   * Return an Observable from firebase
   * and show the ID and associated data.
   */
  get_Emp(){
    return this.afs.collection('emp').snapshotChanges();
  }

  /**
   * 
   * @param empId 
   * @param empFirstName 
   * @param empLastName
   * @param empAddress 
   * @param empDOB 
   * 
   * Update via documentId and return update to database
   */
  update_Emp(empId,empFirstName,empLastName,empAddress,empDOB){
    this.afs.doc('emp/' + empId).update({
      empFirstName: empFirstName,
      empLastName: empLastName,
      empAddress: empAddress,
      empDOB: empDOB
    })
  }

  /**
   * 
   * @param empId 
   * 
   * Delete given emp by its documentId
   */
  delete_Emp(empId){
    this.afs.doc('emp/' + empId).delete()
  }
}
