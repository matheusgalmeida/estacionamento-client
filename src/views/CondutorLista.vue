<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'condutorlista',
  components: {
  },
});
</script>

<template>
<div class="wrapper">
    <img height="132px" width="132px" src="../assets/condutor.png" alt=""/>
    <table>
		    <thead>
			    <tr>
			    	<th>ID</th>
			    	<th>Nome</th>
			    	<th>Telefone</th>
			    	<th>CPF</th>
                    <th>Ações</th>
			    </tr>
		    </thead>
		    <tbody>
			    <tr>
				    <td>1</td>
				    <td>Teste</td>
				    <td>Teste</td>
				    <td>Teste</td>
                    <th>
                        <button class="btn btn-outline-danger "><i class="bi bi-trash-fill"></i></button>
                        <button class="btn btn-outline-primary"><i class="bi bi-pencil-fill "></i></button>
                    </th>
			    </tr>
		    </tbody>
	    </table>
    <div class="btn-wrapper">
        <router-link to="/condutor">
            <button type="submit" class="btn">Cadastrar</button>
        </router-link>
    </div>
</div>
</template>

<style scoped lang="scss">
table {
	border:1px solid #b3adad;
	border-collapse:collapse;
	padding:5px;
}
table th {
	border:1px solid #b3adad;
	padding:5px;
	color: #b3adad;
}
table td {
    border:1px solid #b3adad;
	text-align:center;
	padding:5px;
	color: #b3adad;
}
img {
    margin-bottom: 5px;
}

.btn-wrapper {
    display: flex;
    flex-direction: row-reverse;
    justify-content: flex-start;
    margin-top: 5px;
}
.btn {
  background-color: #2c3e50;
  color: #FFF;
  font-size: 16px;
  font-weight: 500;

}

.btn:hover{
  transform: scale(1.05);
}
</style>