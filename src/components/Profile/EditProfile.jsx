import React from 'react'
import styles from'./EditProfile.module.css'


function EditProfile() {
  return (
    <div className={styles['hero']}>
<div class="container-fluid px-1 py-5 mx-auto">
    <div class="row d-flex justify-content-center">
        <div class="col-xl-7 col-lg-8 col-md-9 col-11 text-right">
            <h3>Edit User Profile 😃</h3>
            <div class="card">
                <form class="form-card" onsubmit="event.preventDefault()">
                    <div class="row justify-content-between text-right">
                        <div class="form-group col-sm-6 flex-column d-flex"> <label class="form-control-label px-3">First name<span class="text-danger"> :</span></label> <input type="text" id="fname" name="fname" placeholder="Enter your first name" onblur="validate(1)"/> </div>
                        <div class="form-group col-sm-6 flex-column d-flex"> <label class="form-control-label px-3">Last name<span class="text-danger"> :</span></label> <input type="text" id="lname" name="lname" placeholder="Enter your last name" onblur="validate(2)"/> </div>
                    </div>
                    <div class="row justify-content-between text-right">
                        <div class="form-group col-sm-6 flex-column d-flex"> <label class="form-control-label px-3">Email<span class="text-danger"> :</span></label> <input type="text" id="email" name="email" placeholder="Enter your email" onblur="validate(3)"/> </div>
                        <div class="form-group col-sm-6 flex-column d-flex"> <label class="form-control-label px-3">Phone number<span class="text-danger"> :</span></label> <input type="text" id="mob" name="mob" placeholder="Enter your mobile num" onblur="validate(4)"/> </div>
                    </div>
                    <div class="row justify-content-between text-right">
                    </div>
                    <div class="row justify-content-between text-right">
                    </div>
                    <div class="row justify-content-end">
                        <div class="form-group col-sm-6">
                             <button className='btn' type="submit">Submit</button> </div>
                    </div>
                </form>
            </div>
        </div>
    </div>
</div>



    </div>
  )
}

export default EditProfile

