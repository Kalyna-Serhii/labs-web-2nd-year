<template>
  <div class="container">
    <button @click="copySelectedRows"><i class="bi bi-copy"></i> Copy</button>
    <button @click="removeSelectedRows"><i class="bi bi-trash"></i> Remove</button>
    <table class="resp-tab">
      <thead>
      <tr class="controlButtons">
        <th>Control</th>
        <th>Name</th>
        <th>Surname</th>
        <th>Patronymic</th>
        <th>Gender</th>
        <th>Date of Birth</th>
        <th>Phone</th>
        <th>Email</th>
        <th>Password</th>
        <th>Group</th>
        <th>File</th>
      </tr>
      </thead>
      <tbody>
      <tr v-for="(row, index) in tableData" :key="index">
        <td><input type="checkbox" v-model="selectedRows[index]"></td>
        <td>{{ row.name }}</td>
        <td>{{ row.surname }}</td>
        <td>{{ row.patronymic }}</td>
        <td>{{ row.gender }}</td>
        <td>{{ row.dateOfBirth }}</td>
        <td>{{ row.phone }}</td>
        <td>{{ row.email }}</td>
        <td>{{ row.password }}</td>
        <td>{{ row.group }}</td>
        <td>{{ row.file }}</td>
      </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import bus from './event-bus';

export default {
  data() {
    return {
      tableData: [],
      selectedRows: []
    };
  },
  methods: {
    clearSelectedRows() {
      this.selectedRows = new Array(this.tableData.length).fill(false);
    },

    copySelectedRows() {
      const selectedData = this.tableData.filter((_, index) => this.selectedRows[index]);
      if (selectedData.length > 0) {
        this.tableData = this.tableData.concat(selectedData);
        this.clearSelectedRows();
      } else {
        alert('Спочатку оберіть рядки для копіювання');
      }
    },

    removeSelectedRows() {
      const selectedIndexes = this.selectedRows.reduce((acc, isSelected, index) => {
        if (isSelected) {
          acc.push(index);
        }
        return acc;
      }, []);

      if (selectedIndexes.length > 0) {
        selectedIndexes.reverse().forEach((index) => {
          this.tableData.splice(index, 1);
        });
        this.clearSelectedRows();
      } else {
        alert('Спочатку оберіть рядки для видалення');
      }
    }
  },
  created() {
    bus.on('formDataSubmitted', (formData) => {
      this.tableData.push(formData);
    });
  }
};
</script>
