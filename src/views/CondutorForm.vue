<script lang="ts">

</script>

<template>
  <form>
    <div class="row">
      <div class="col">
        <input type="text" class="form-control" placeholder="Nome" v-model="nome" aria-label="First name">
      </div>
      <div class="col">
        <input type="text" class="form-control" placeholder="Telefone" v-model="telefone" aria-label="First name">
      </div>
      <div class="col">
        <input type="text" class="form-control" placeholder="CPF" v-model="cpf" aria-label="Last name">
      </div>
    </div>
    <button type="submit" class="btn">Cadastrar</button>
  </form>
</template>

<style scoped lang="scss">
.row{
  display:flex;
  flex-direction: column;
  width: 280px;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 15px;
  }
.col {
  margin-top: 12px;
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
