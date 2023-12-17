{
  description = "molio";
  inputs = {
    flake-utils.url = "github:numtide/flake-utils";
    nixpkgs.url = "github:nixos/nixpkgs/nixpkgs-unstable";
  };
  outputs = { self, nixpkgs, flake-utils }:
    flake-utils.lib.eachDefaultSystem (system:
    let
      pkgs = import nixpkgs {
        inherit system;
      };
      drv = pkgs.mkShell {
        name = "molio";
        buildInputs = [
          pkgs.nodejs
          pkgs.nodePackages.pnpm
          pkgs.python3
          pkgs.podman
        ];
        shellHook = ''
          export LD_LIBRARY_PATH=${pkgs.libuuid.out}/lib:$LD_LIBRARY_PATH
        '';
      };
      image-drv = pkgs.mkShell {
        name = "molio";
        buildInputs = [
          pkgs.nodejs
          pkgs.nodePackages.pnpm
          pkgs.python3
        ];
        shellHook = ''
          export LD_LIBRARY_PATH=${pkgs.libuuid.out}/lib:$LD_LIBRARY_PATH
          npm install
          npm build
        '';
      };
    in
    {
      devShell = drv;
      defaultPackage = drv;
      packages = {
        molioImage = pkgs.dockerTools.buildLayeredImage {
          name = "molio";
          contents = [image-drv];
          config = {
            Cmd = [
              "npm start"
            ];
            ExposedPorts = {
              "5000/tcp" = { };
            };
          };
        };
      };
    }
  );
}
