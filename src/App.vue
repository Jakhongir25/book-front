<template>
    <div class="container-fluit">
        <HeaderRow />
        <!--main start-->
        <div class="row mt-4 mb-4">
            <!--SideBar start-->
            <CategoriesCol/>
            <!--SideBar finished-->
            <!--content start-->
            <div class="col-12 col-sm-12 col-md-9 col-lg-10 col-xl-10">
                <router-view/>
            </div>
        </div>
            <!--content finished-->
    </div>
        <!--main finished-->
        <!--footer start-->
        <FooterRow/>
        <!--footer finished-->
</template>

<script>

import HeaderRow from "@/components/HeaderRow";
import CategoriesCol from "@/components/CategoriesCol";
import FooterRow from "@/components/FooterRow";
export default {
  name: 'App',
  components: {
      FooterRow,
      CategoriesCol,
      HeaderRow
  }
}
</script>

<style>

</style>
