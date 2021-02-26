<template>
  <section class="section">
    <div class="container">
      <h2 class="section__title text-center" v-html="title"></h2>

      <div class="row">
        <div class="col-xl-5">
          <StaffItem
            :imgSrc="staff.imgSrc"
            :name="staff.name"
            :post="staff.post"
            :phone="staff.phone"
            :text="staff.text"
          />
        </div>

        <div class="col-xl-7">
          <Map />
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import StaffItem from '@/components/Base/StaffItem.vue';
import Map from '@/components/Base/Map.vue';

export default {
  name: 'Section9',
  components: {
    StaffItem,
    Map,
  },
  data() {
    return {
      title: `
        Помогли построить более 130 домов и коттеджей 
        <br>по всей Самарской области
      `,
      staff: {
        imgSrc: require('@/assets/img/staff/staff.png'),
        name: 'Игорь Краснов',
        post: 'должность',
        phone: '+7 (999) 999-99-99',
        text: `
          Проверим готовый (типовой или индивидуальный) проект дома. Сэкономим деньги,
          силы и нервы. Проверку осуществляет строительный консультант - ведущий специалист
          загородного домостроения. Проверим готовый (типовой или индивидуальный) проект дома.
          Сэкономим деньги, силы и нервы. Проверку осуществляет строительный консультант -
          ведущий специалист загородного домостроения. Проверим готовый (типовой или индивидуальный)
          проект дома. Сэкономим деньги, силы и нервы. Проверку осуществляет строительный
          консультант - ведущий специалист загородного домостроения.
        `,
      },
    };
  },
};
</script>

<style lang="scss" scoped>
  .section {
    background-color: #E7F0F9;
    background-image: url(~@/assets/img/block9/bg-left-1.png),
      url(~@/assets/img/block9/bg-left-2.png),
      url(~@/assets/img/block9/bg-right.png);
    background-repeat: no-repeat;
    background-position: 0 40px, 183px calc(100% - 65px), calc(100% - 68px) 207px;
    padding: 92px 0;

    &__title {
      margin-bottom: 34px;
      position: relative;
      z-index: 1;
    }
  }
</style>
