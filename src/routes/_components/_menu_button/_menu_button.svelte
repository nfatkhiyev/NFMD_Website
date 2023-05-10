<script>
    export let clicked;
</script>

<style>
.menu_button_container {
  display: inline-block;
  cursor: pointer;
  margin-right: 1.0em;
  margin-left: 1.0 em;
}

.bar1, .bar2, .bar3 {
    width: 35px;
    height: 5px;
    border-radius: 2.5px;
    background-color: grey;
    margin: 6px 0;
    transition: 0.4s;
}

/* Rotate first bar */
.change .bar1 {
    transform: translate(0, 11px) rotate(-45deg);
}

/* Fade out the second bar */
.change .bar2 {opacity: 0;}

/* Rotate last bar */
.change .bar3 {
    transform: translate(0, -11px) rotate(45deg);
}
</style>

<div class="menu_button_container" class:change={clicked} on:click="{() => clicked = !clicked}" on:keypress="{() => clicked = !clicked}">
    <div class="bar1"></div>
    <div class="bar2"></div>
    <div class="bar3"></div>
</div>
