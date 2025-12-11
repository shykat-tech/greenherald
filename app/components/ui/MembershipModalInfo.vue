<script setup lang="ts">
import Membership from '~/components/blocks/Membership.vue'

</script>

<template>
  <div id="modal-cards">
    <Membership />
  </div>
</template>

<style lang="scss" scoped>
#modal-cards {

  #membership {
    width: 100%;
    overflow: hidden;
    padding-block: 0;
    padding: 0;

    @media screen and (max-width: 480px) {
      padding: 0;
    }

    :deep(.container) {
      width: 100%;

      .plans {
        .plan {
          @include clamp-property("padding", 1.5, 1.5);

          .plan--desc {
            @include clamp-property("font-size", 0.875, 0.875);
          }

          .dashed-border {
            @include clamp-property("margin-top", 1, 1.5);
            @include clamp-property("margin-bottom", 2, 2.5);
          }

          .plan--package {
            margin-bottom: auto;

            .plan--price {
              @include clamp-property("font-size", 2, 2.5);
            }

            .plan--key-points {
              @include clamp-property("margin-bottom", 2.38, 3.75);

              li {
                span {
                  @include clamp-property("font-size", 0.875, 1);
                  line-height: 140%;
                }
              }
            }
          }
        }
      }
    }
  }
}
</style>
