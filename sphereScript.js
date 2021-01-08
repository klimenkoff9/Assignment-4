function displayVolume() {
    let localRadius = document.getElementById('sphere-radius').value;
    // assigns value of user input into Local Radius

    let result = (4*Math.PI*localRadius*localRadius*localRadius)/3;
    // 4/3*pi*r^3 is the volume of a sphere
    
    result = result.toFixed(2)
    alert(`The volume of your sphere is ${result}`);
}