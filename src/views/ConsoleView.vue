vue
<template>
  <div class="common-layout">
    <el-container>
      <el-aside>
        <el-menu default-active="1" @select="handleSelect">
          <el-header>
            <dev class="logo" @click="goHome">
              <img style="width: 100px" src="../images/element-plus-logo.svg" alt="logo" />
            </dev>
          </el-header>
          <el-menu-item index="1">
            <el-icon>
              <House />
            </el-icon>
            <span>Overview</span>
          </el-menu-item>
          <el-menu-item index="2">
            <el-icon>
              <VideoPlay />
            </el-icon>
            <span>Playground</span>
          </el-menu-item>
          <el-menu-item index="3">
            <el-icon>
              <CoffeeCup />
            </el-icon>
            <span>Usage</span>
          </el-menu-item>
          <el-menu-item index="4">
            <el-icon>
              <Key />
            </el-icon>
            <span>API Key</span>
          </el-menu-item>
          <el-menu-item index="5">
            <el-icon>
              <setting />
            </el-icon>
            <span>Settings</span>
          </el-menu-item>
        </el-menu>
        <div class="user">
          <div class="user-info">
            <el-avatar src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png" />
            <div class="user-name">我是用户我是用户我是用户</div>
          </div>
          <el-icon title="退出登录" @click="logout">
            <SwitchButton />
          </el-icon>
        </div>
      </el-aside>
      <el-container>
        <el-header>Header</el-header>
        <el-main>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptates omnis officiis cumque, reiciendis, magnam
          rem
          aperiam non recusandae repudiandae facilis quidem? Modi minus dolores ipsam quasi eos voluptatibus assumenda
          in. Est,
          ex dicta debitis odio doloribus quam non minus ut, voluptas adipisci ipsam earum. Mollitia temporibus
          accusantium
          repudiandae eos doloribus debitis excepturi inventore illo voluptatum tempora numquam eum minima quisquam
          quam, autem
          laudantium! Consectetur ipsam sint sequi architecto excepturi cupiditate mollitia aliquam necessitatibus, ea
          ex, rerum
          voluptatibus magnam voluptatem animi nostrum exercitationem ullam beatae voluptates autem officiis tempore
          inventore
          cum! Quos minus aspernatur ad, officia earum ipsa, reiciendis velit et repellendus ullam inventore sunt!
          Labore optio
          odit cupiditate, iusto praesentium iste earum soluta necessitatibus doloribus rem vel perferendis ea minima
          veritatis
          laborum, provident ipsa commodi reiciendis nisi, adipisci ad architecto illum. Nam quasi dolorem amet hic
          reiciendis.
          Sunt deserunt eos cupiditate perspiciatis praesentium recusandae provident eius consequatur, amet consequuntur
          officiis commodi nostrum aut dicta quas beatae vel, tempora possimus et! Reprehenderit, saepe dolores
          dignissimos,
          optio enim quidem at necessitatibus fuga minima consequuntur eum doloremque obcaecati. Adipisci excepturi
          optio quae
          iure, vitae beatae ipsa magnam nisi deleniti non sit laboriosam, dolores blanditiis sint possimus animi id
          veritatis
          aliquam! Itaque at, vero autem cumque nostrum quo excepturi pariatur illo enim eius asperiores ex, quos
          architecto
          sunt accusamus distinctio magnam odit blanditiis vel cum facilis aut quae explicabo! Neque molestias non eos
          distinctio adipisci eligendi natus sapiente iure modi. Molestiae delectus nostrum impedit ipsa sequi nam
          provident
          magnam perferendis expedita, quam voluptates doloremque reprehenderit magni! Autem facilis sit magnam
          recusandae
          laborum. Dignissimos consequatur nihil necessitatibus exercitationem ut soluta hic, ratione deserunt. Nesciunt
          unde,
          explicabo ipsum nam iure molestias quidem ipsam ea fugiat necessitatibus nobis laudantium est non et
          asperiores
          pariatur dolor velit sit animi magnam nihil ullam! Alias illum iusto, aperiam sapiente consequatur sit nobis
          ipsum,
          commodi perspiciatis consectetur possimus quas non assumenda animi quia accusamus nesciunt optio velit,
          repellendus
          maxime. Optio, ea atque? Fuga, adipisci quibusdam! Facilis laborum quisquam ipsum obcaecati vitae. Atque
          voluptates,
          tempore, dolor quos ratione obcaecati magnam repellat dolore quas eaque quo maxime qui at quisquam illum?
          Deserunt ex
          dolorum quo aliquid eos tempore sunt veniam reprehenderit, temporibus ratione pariatur deleniti aut esse
          aliquam saepe
          accusamus impedit iste. Omnis impedit facere doloribus hic eveniet nulla officiis rem sunt recusandae enim
          natus
          aliquam, rerum architecto est minus. Cum, sunt, tenetur vero nihil dignissimos repellendus quis quae
          laudantium natus
          vitae autem quia debitis iste dolor eos labore eaque impedit culpa quam accusantium veritatis vel. Animi
          nesciunt est
          harum numquam corrupti nisi commodi amet eum aliquam facilis, reprehenderit, quos veritatis earum, magnam
          expedita
          aspernatur? Aliquid inventore magnam dicta voluptatibus vero necessitatibus beatae sequi ducimus dolore
          consequatur
          iure veritatis veniam labore cupiditate odio excepturi nemo, tempora perspiciatis cumque quasi. Hic aut itaque
          ipsa
          consectetur? Laboriosam tempore quisquam cumque labore blanditiis doloribus fugiat recusandae, ab error non
          enim dolor
          aspernatur possimus temporibus fuga optio sed illum inventore! Laborum blanditiis voluptate nostrum
          exercitationem
          velit eligendi sequi praesentium consequuntur fugiat, similique earum autem magnam fuga ducimus omnis ratione
          nobis
          ullam. Animi earum rem corporis fuga alias architecto eum laborum delectus necessitatibus tempore debitis
          illum, ipsa
          vel nisi. Laborum temporibus quos est ipsum provident aperiam voluptatibus modi natus molestiae, molestias
          quasi
          pariatur! Quasi hic consequuntur fugit corrupti explicabo dolor esse temporibus maiores autem rerum. Aliquam
          nihil
          neque ex amet non ipsum facilis dolorem quam veniam molestiae possimus sapiente sunt alias provident, ullam
          magni unde
          ut praesentium at fugit nostrum facere repellat illum consectetur! Obcaecati doloremque laudantium aliquid
          sunt
          aliquam voluptate accusantium cumque perferendis dolores, exercitationem molestiae adipisci autem tempora
          incidunt
          eaque, nam reiciendis explicabo consequatur. Odio, odit esse officiis vero accusantium quam facilis nostrum
          laborum,
          illo quidem labore libero possimus, culpa saepe eius maxime blanditiis totam excepturi voluptatibus. Unde
          nihil
          similique numquam magni excepturi impedit placeat iusto enim vero iure voluptatum doloribus aut nobis animi,
          quo quos
          sunt libero ullam. Explicabo at illo illum fuga, quas perferendis dignissimos dolore velit numquam ducimus,
          possimus
          reprehenderit quod tempora temporibus vero. Adipisci earum architecto voluptatem, placeat corrupti harum
          aspernatur
          distinctio animi iure suscipit eligendi cumque sit blanditiis quia. Esse cumque, officiis deserunt vitae culpa
          minus
          eveniet modi fugit ipsa asperiores fuga, veritatis amet impedit sequi est distinctio eius voluptatibus dolorum
          animi
          iure eos! Cum veritatis ab, reiciendis quas, expedita exercitationem nobis provident reprehenderit possimus
          eius error
          earum excepturi autem quis odit quibusdam, voluptatem aperiam dolores! Eligendi provident reprehenderit
          temporibus
          ipsum ea necessitatibus ipsam vel mollitia sequi officiis laboriosam et quasi sunt sit, consequuntur vero
          facere
          recusandae est corporis explicabo distinctio repellat. Cum iure quibusdam, officiis soluta sequi atque quam
          iste,
          corporis in exercitationem ducimus eum sit ullam tempore perferendis esse quia ratione recusandae qui tempora
          ea.
          Assumenda, asperiores sit ex ratione illum omnis totam, praesentium aliquid tempora unde iusto atque at, ipsum
          dicta
          vitae laboriosam velit laudantium quas nihil commodi! Laborum veritatis culpa iusto, non repellat iure? Illum
          ea
          blanditiis ab non. Illum tempora commodi porro. Minima quo fugit asperiores accusamus ullam assumenda error
          blanditiis
          odit nam! Error, amet minus? Amet totam voluptates libero adipisci, placeat incidunt nesciunt iste ipsam
          aperiam
          officia quod ipsum ut exercitationem vitae at consectetur unde accusantium quidem esse vero quam perspiciatis
          sint?
          Nam vitae doloremque quibusdam ipsa quisquam quas praesentium rem tempora nostrum aut officiis ex perspiciatis
          quos
          aliquam dolorum nesciunt fugit ratione, laboriosam inventore numquam? Facere enim veritatis tempora ex
          officia. Quidem
          ut, beatae dolorum odit vero enim itaque provident cumque quos suscipit inventore, ipsum officia harum? Illo
          atque
          dolorum vero fugiat aut recusandae asperiores, harum fugit itaque magnam molestiae fuga mollitia, quas sequi
          nemo
          velit exercitationem sint. Minima asperiores architecto sit est voluptatibus saepe in ullam impedit quae,
          accusamus
          corrupti quisquam a aspernatur similique, optio rerum, doloremque quasi culpa voluptates? Magnam doloremque
          culpa quod
          molestiae hic, soluta nesciunt optio itaque distinctio nulla dolorem neque ab nihil. Recusandae modi dolore,
          ad ex
          nulla repellat labore placeat maxime nihil dolorem in autem aut est quasi officia distinctio inventore fugiat,
          mollitia vero provident ab omnis exercitationem consequatur! Facere ipsum quis libero ea voluptatibus id
          maxime
          ducimus.
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script lang="ts" setup>
import router from '@/router';
import store from '@/store';

const goHome = () => {
  router.push({ name: 'home' })
}
const handleSelect = (key: string) => {
  console.log(key)
}
const logout = () => {
  store.commit('setIsLogin', false);
  router.replace({ name: 'home' })
}
</script>

<style lang="scss" scoped>
/*定义滚动条宽高及背景，宽高分别对应横竖滚动条的尺寸*/
::-webkit-scrollbar {
  width: 7px;
  height: 7px;
}

/*定义滚动条的轨道颜色、内阴影及圆角*/
::-webkit-scrollbar-track {
  border-radius: 4px;
  -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.2);
  background-color: #f1f1f1;
}

/*定义滑块颜色、内阴影及圆角*/
::-webkit-scrollbar-thumb {
  border-radius: 8px;
  background-color: #f3e0c7;
  -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, .3);
}

/*定义滑块悬停变化颜色、内阴影及圆角*/
::-webkit-scrollbar-thumb:hover {
  background-color: #f0bf7e;
}

.common-layout {
  .el-container {
    .el-aside {
      width: 257px;
      height: 100%;
      border-right: 1px solid var(--el-menu-border-color);
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      background-color: #fff;

      .el-menu {
        width: 249px;
        padding: 0 20px;
        border: none;

        .el-header {
          display: flex;
          flex-direction: column;
          align-items: start;
          justify-items: center;
          padding: 5px;
          height: 10vh;
          min-height: 60px;
          margin-bottom: 15px;
          border: none;

          .logo {
            cursor: pointer;
            user-select: none;
            -webkit-user-select: none;
            margin: 25px 0;
          }
        }

        .el-menu-item {
          height: 30px;
          line-height: 30px;
          justify-content: left;
          padding: 5px;
          border-radius: 5px;
          margin: 10px 0;
          font-family: Verdana, Geneva, Tahoma, sans-serif;

          &:hover {
            background-color: #f3e0c7;
          }

          &.is-active {
            color: #ea890c;
          }
        }
      }

      .user {
        display: flex;
        align-items: center;
        justify-content: space-between;
        width: 249px;
        height: 60px;
        padding: 0 20px;
        box-sizing: border-box;
        margin-bottom: 15px;

        .user-info {
          height: 60px;
          display: flex;
          align-items: center;
          justify-content: left;

          .el-avatar {
            margin-right: 10px;
          }

          .user-name {
            width: 140px;
            height: 60px;
            line-height: 60px;
            overflow: hidden;
            white-space: nowrap;
            text-overflow: ellipsis;
            cursor: default;
          }
        }

        .el-icon {
          cursor: pointer
        }
      }
    }

    .el-container {
      height: 100vh;
      background: linear-gradient(165deg, #fff 30%, #f3e0c7);

      .el-header {
        height: 10vh;
        min-height: 60px;
        border-bottom: 1px solid var(--el-menu-border-color);
        display: flex;
        align-items: center;
        justify-content: space-between;
      }
    }
  }
}
</style>