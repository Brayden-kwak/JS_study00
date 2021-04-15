function validate(event) {
  // TODO - write custom validation logic to validate the longitude and latitude
  // values. The latitude value must be a number between -90 and 90; the
  // longitude value must be a number between -180 and 180. If either/both are
  // invalid, show the appropriate error message in the form, and stop the 
  // form from being submitted. If both values are valid, allow the form to be
  // submitted.
  let validFlag = true;
  let error = "";
  latitude = parseFloat(document.detailsForm.latitude.value);
  longitude = parseFloat(document.detailsForm.longitude.value);

  if(latitude < -90 || latitude > 90 || isNaN(latitude)){
    document.getElementById('latitudeError').innerText="must be a valid Latitude (-90 to 90)";
    error += "must be a valid Latitude (-90 to 90)";
    document.getElementById('latitudeError').innerHTML = error;
    validFlag = false;
  }else{
    document.getElementById('latitudeError').innerText="";
  }

  if((longitude < -180 || longitude > 180 || isNaN(longitude)) && validFlag !== false){
    document.getElementById('longitudeError').innerText="must be a valid Longitude (-180 to 180)";
    error += "must be a valid Longitude (-180 to 180)";
    document.getElementById('longitudeError').innerHTML = error;
    validFlag = false;
  }else{
    document.getElementById('longitudeError').innerText="";
  }

  return validFlag;
}

// Wait for the window to load, then set up the submit event handler for the form.
window.onload = function() {
  const form = document.querySelector('form');
  form.onsubmit = validate;
};
