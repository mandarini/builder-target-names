# Build target name issue

When a buildable library depends on a buildable library, and their build targets are named differently, then it cannot find the other lib, and gives the error:

```shell
'rootDir' is expected to contain all source files.
```

## Nx builders that have this issue

- `@nx/rollup:rollup` (with either `babel` or `swc` as compiler)
  - To test it run `nx build jslr1` or `nx build rlrb1`
- `@nx/js:swc`
  - To test it run `nx build jslswc1`
- `@nx/js:tsc`:
  - To test it run `nx build jsltsc1`
- `@nx/angular:ng-packagr-lite`
  - To test it run `nx build nglib1`

## Nx builders that do not have this issue

- `@nx/esbuild:esbuild`
  - To test it run `nx build jslesb1`
- `@nx/vite:build`
  - To test it run `nx build jslv1` or `nx build rlrv1`
