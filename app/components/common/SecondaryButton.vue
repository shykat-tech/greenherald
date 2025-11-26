<template>
    <button class="secondary-btn">
        <slot />

        <div class="btn-icon-container">
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M10 15.4175V4.16748" stroke="#08110B" stroke-width="1.5" stroke-linecap="round"
                    stroke-linejoin="round" />
                <path d="M5 10.8325C5 10.8325 8.68242 15.8325 10 15.8325C11.3177 15.8325 15 10.8325 15 10.8325"
                    stroke="#08110B" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
            </svg>
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M10 15.4175V4.16748" stroke="#08110B" stroke-width="1.5" stroke-linecap="round"
                    stroke-linejoin="round" />
                <path d="M5 10.8325C5 10.8325 8.68242 15.8325 10 15.8325C11.3177 15.8325 15 10.8325 15 10.8325"
                    stroke="#08110B" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
            </svg>

        </div>
    </button>
</template>

<style scoped lang="scss">
.secondary-btn {
    @include button-default;
    background: none;

    .btn-icon-container {
        position: relative;
        display: flex;
        flex-direction: column;
        width: 20px;
        height: 20px;
        overflow: hidden;
        margin-top: 3px;

        svg {
            position: absolute;
            top: 50%;
            left: 0;
            transition: all 0.3s;
            flex-shrink: 0;
            transform: translateY(-50%) scale(1);

        }

        svg:nth-child(1) {
            top: -10px;
        }

        svg path {
            stroke: black;
        }
    }

    &:hover {
        svg {
            transform: translateY(50%);
        }
    }

}
</style>