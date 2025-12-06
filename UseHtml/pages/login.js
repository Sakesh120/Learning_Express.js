export default function formData() {
  return `<form action="/submit" method="post">
        <label for="name">Full Name:</label><br>
        <input type="text" id="name" name="name" required><br><br>

        <label for="age">Age:</label><br>
        <input type="number" id="age" name="age" required><br><br>

        <label for="gender">Gender:</label><br>
        <select id="gender" name="gender">
            <option value="">--Select--</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="other">Other</option>
        </select><br><br>

        <label for="email">Email:</label><br>
        <input type="email" id="email" name="email" required><br><br>

        <label for="phone">Phone Number:</label><br>
        <input type="text" id="phone" name="phone"><br><br>

        <label for="course">Course:</label><br>
        <input type="text" id="course" name="course"><br><br>

        <input type="submit" value="Submit">
    </form>`;
}
