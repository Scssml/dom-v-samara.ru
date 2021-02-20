<template>
  <section class="section">
    <div class="container">
      <h2 class="section__title text-center" v-html="title"></h2>

      <div class="row">
        <template v-for="(item, index) in projectList">
          <div class="col-lg-3" :key="index">
            <ProjectItem
              :imgSrc="item.imgSrc"
              :name="item.title"
              :props="item.props"
            />
          </div>
        </template>

        <div class="col-lg-3">
          <CatalogBlock
            :imgSrc="catalogBlock.imgSrc"
            :title="catalogBlock.title"
            :text="catalogBlock.text"
          />
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import ProjectItem from '@/components/Base/ProjectItem.vue';
import CatalogBlock from '@/components/Base/CatalogBlock.vue';

export default {
  name: 'Section3',
  components: {
    ProjectItem,
    CatalogBlock,
  },
  data() {
    return {
      title: 'Проекты домов',
      projectList: [
        {
          imgSrc: require('@/assets/img/projects/img-1.jpg'),
          title: 'Лада дом',
          props: [
            {
              icon: require('@/assets/img/projects/icon-1.svg'),
              value: '100 м²',
            },
            {
              icon: require('@/assets/img/projects/icon-2.svg'),
              value: '4 спальни',
            },
            {
              icon: require('@/assets/img/projects/icon-4.svg'),
              value: 'терраса',
            },
          ],
        },
        {
          imgSrc: require('@/assets/img/projects/img-2.jpg'),
          title: 'Волжский утёс',
          props: [
            {
              icon: require('@/assets/img/projects/icon-1.svg'),
              value: '286 м²',
            },
            {
              icon: require('@/assets/img/projects/icon-2.svg'),
              value: '5 комнат',
            },
            {
              icon: require('@/assets/img/projects/icon-3.svg'),
              value: 'гараж',
            },
          ],
        },
        {
          imgSrc: require('@/assets/img/projects/img-3.jpg'),
          title: 'Прилесье',
          props: [
            {
              icon: require('@/assets/img/projects/icon-1.svg'),
              value: '136 м²',
            },
            {
              icon: require('@/assets/img/projects/icon-2.svg'),
              value: '3 спальни',
            },
            {
              icon: require('@/assets/img/projects/icon-5.svg'),
              value: '3 ванные комнаты',
            },
          ],
        },
      ],
      catalogBlock: {
        imgSrc: require('@/assets/img/projects/catalog.png'),
        title: 'Дом Вашей мечты',
        text: 'Не можете найти дом, удовлетворяющий всем требованиям? Мы поможем создать планировку Вашей мечты.',
      },
    };
  },
};
</script>

<style lang="scss" scoped>
  .section {
    background-color: #FBFBFB;
    background-image: url(~@/assets/img/block3/bg-left.png),
      url(~@/assets/img/block3/bg-right.png);
    background-repeat: no-repeat;
    background-position: 37px 50%, calc(100% - 145px) 95px;
    padding: 92px 0;

    &__title {
      margin-bottom: 28px;
    }
  }
</style>
