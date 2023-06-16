<script lang="ts">
import { Condutor } from '@/model/condutor';
import { CondutorCliente } from '@/client/condutor.client';
import { Notification } from '@/model/notification'

export default class condutorForm extends Condutor {

  public notification : Notification = new Notification()
  public condutor : Condutor = new Condutor
  public CondutorCliente! : CondutorCliente

  public mounted(): void {
    this.CondutorCliente = new CondutorCliente()
      console.log(this.nome)
      console.log(this.telefone)
      console.log(this.cpf)
  }

  public onClickCadastrar(): void {
    this.CondutorCliente.cadastrar(this.condutor)
      .then(
        success => {
          this.notification = this.notification.new(true, 'notification is-success', 'Condutor cadastrado com sucesso!!!');
          this.onClickLimpar();
      },
      error => {
        this.notification = this.notification.new(true, 'notification is-danger', 'Error: ' + error);
        this.onClickLimpar();
      });
  }

  public onClickFecharNotificacao(): void {
    this.notification = new Notification()
  }
  public onClickLimpar(): void {
    this.condutor = new Condutor()
  }
  public setNotification(active: boolean, className: string, message: string): void {
  this.notification = this.notification.new(active, className, message);
}
}
</script>

<template>
  <div class="columns" v-if="notification.ativo">
    <div class="column is-12">
      <div :class="notification.classe">
      <button @click="onClickFecharNotificacao()" class="delete" ></button>
        {{ notification.mensagem }}
      </div>
    </div>
  </div>

  <form >
    <div class="row">
      <div class="col">
        <input type="text" class="form-control" placeholder="Nome" v-model="condutor.nome" aria-label="Nome">
      </div>
      <div class="col">
        <input type="text" class="form-control" placeholder="Telefone" v-model="condutor.telefone" aria-label="Telefone">
      </div>
      <div class="col">
        <input type="text" class="form-control" placeholder="CPF" v-model="condutor.cpf" aria-label="CPF">
      </div>
    </div>
    <button type="submit" class="btn" @click="onClickCadastrar()">Cadastrar</button>
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
