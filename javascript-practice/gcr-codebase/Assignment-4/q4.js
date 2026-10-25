// Q4: Custom Form Builder
class FormBuilder {
  constructor(containerId, fields) {
    this.container = document.getElementById(containerId);
    this.fields = fields;
    this.render();
  }

  // build the whole form as an HTML string and put it in the container
  render() {
    let html = '<form id="dynamicForm">';

    this.fields.forEach((field, index) => {
      const id = "field_" + index;
      html += `<label for="${id}">${field.label}</label>`;

      if (field.type === "select") {
        html += `<select id="${id}">`;
        field.options.forEach((opt) => (html += `<option value="${opt}">${opt}</option>`));
        html += "</select>";
      } else if (field.type === "textarea") {
        html += `<textarea id="${id}" rows="3"></textarea>`;
      } else {
        html += `<input type="${field.type}" id="${id}">`;
      }
    });

    html += '<button type="submit">Submit</button></form>';
    this.container.innerHTML = html;

    // attach the submit handler after the form exists in the DOM
    document.getElementById("dynamicForm").addEventListener("submit", (e) => {
      e.preventDefault();
      const data = this.getFormData();
      const out = document.getElementById("output");
      out.style.display = "block";
      out.textContent = JSON.stringify(data, null, 2);
      console.log(data);
    });
  }

  // returns all entered values as an object: { label: value }
  getFormData() {
    const data = {};
    this.fields.forEach((field, index) => {
      data[field.label] = document.getElementById("field_" + index).value;
    });
    return data;
  }
}

const fields = [
  { type: "text", label: "Username" },
  { type: "email", label: "Email" },
  { type: "password", label: "Password" },
  { type: "number", label: "Age" },
  { type: "select", label: "Country", options: ["India", "USA", "UK"] },
  { type: "textarea", label: "About" },
];

new FormBuilder("formArea", fields);
