class UserDto {
    id;

    name;

    gender;

    phone;

    password;

    email;

    role;

    constructor(model) {
        this.id = model.id;
        this.name = model.name;
        this.gender = model.gender;
        this.phone = model.phone;
        this.password = model.password;
        this.email = model.email;
        this.role = model.role;
    }
}

export default UserDto;